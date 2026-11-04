// Turns the Markdown files in src/content/decks/ into slides.
//
// Deck file format (see docs/editing-slides.md for the full guide):
//
//   ---                      <- frontmatter: title, subtitle, order
//   title: My deck
//   eyebrow: Day 1
//   draft: true            <- optional: only shown while previewing, never on the live site
//   ---
//   # First slide
//   ---                      <- a line with only --- starts a new slide
//   <!-- layout: statement -->
//   ## Second slide
//   <!-- notes: Only the presenter sees this. -->
//   km: ខ្មែរ               <- a Khmer caption shown under the line above it

import { marked } from 'marked';

export const LAYOUTS = ['default', 'title', 'section', 'statement', 'two-col', 'photo', 'gallery', 'cards', 'image'] as const;
export type Layout = (typeof LAYOUTS)[number];

export interface Slide {
  index: number;
  layout: Layout;
  html: string;
  /** Only used by the two-col layout. */
  rightHtml?: string;
  /** Only used by the photo layout: the full-screen background image. */
  background?: { src: string; alt: string };
  /** Only used by the photo layout: an optional second image, shown as a card in the top-right corner. */
  inset?: { src: string; alt: string };
  /** Speaker notes, as HTML. */
  notes: string;
  /** First heading on the slide, used for the presenter's "next up" preview. */
  heading: string;
}

export interface Deck {
  slug: string;
  title: string;
  subtitle: string;
  /** Khmer versions of the title and subtitle (optional). */
  titleKm: string;
  subtitleKm: string;
  /** Small label above the title, e.g. "Day 1". */
  eyebrow: string;
  /** Drafts show up in `npm run dev` but are left out of the live site. */
  draft: boolean;
  order: number;
  slides: Slide[];
}

const km = (text: string) => `<span class="km" lang="km">${text}</span>`;

// An image with a title becomes a captioned figure:  ![alt text](/photo.jpg "Caption")
// Add a Khmer caption after " | ":                    ![alt text](/photo.jpg "Caption | ខ្មែរ")
marked.use({
  renderer: {
    image({ href, title, text }) {
      const attr = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
      const img = `<img src="${attr(href)}" alt="${attr(text)}" loading="lazy">`;
      if (!title) return img;
      const [en, kh] = title.split(' | ');
      return `<span class="figure">${img}<span class="caption">${en}${kh ? km(kh) : ''}</span></span>`;
    },
  },
});

/**
 * Markdown → HTML, plus Khmer captions: any line starting with `km:` (also inside
 * lists and > quotes) becomes a small Khmer line under the text above it.
 */
export function renderMarkdown(md: string): string {
  const withCaptions = md
    // A caption right under a heading becomes part of that heading.
    .replace(/^(#{1,6}[ \t].+)\n[ \t]*km:[ \t]*(.+)$/gm, (_, heading, text) => `${heading} ${km(text)}`)
    .replace(/^([ \t>]*)km:[ \t]*(.+)$/gm, (_, prefix, text) => prefix + km(text));
  return marked.parse(withCaptions, { async: false });
}

const files = import.meta.glob('../content/decks/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return { data, body: raw.slice(match[0].length) };
}

/** Split on lines that are exactly `---`, ignoring any inside ``` code blocks. */
function splitSlides(body: string): string[] {
  const slides: string[] = [];
  let current: string[] = [];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    if (!inFence && line.trim() === '---') {
      slides.push(current.join('\n'));
      current = [];
    } else {
      current.push(line);
    }
  }
  slides.push(current.join('\n'));
  return slides.filter((s) => s.trim() !== '');
}

function parseSlide(source: string, index: number): Slide {
  let layout: Layout = 'default';
  const notes: string[] = [];

  const content = source.replace(/<!--\s*(layout|notes):\s*([\s\S]*?)-->/g, (_, key, value) => {
    const v = value.trim();
    if (key === 'layout') {
      if ((LAYOUTS as readonly string[]).includes(v)) layout = v as Layout;
      else console.warn(`[decks] Unknown layout "${v}" on slide ${index + 1}. Use one of: ${LAYOUTS.join(', ')}`);
    } else {
      notes.push(v);
    }
    return '';
  });

  // The photo layout uses the slide's first image as a full-screen background,
  // and a second image (if any) as a card in the top-right corner.
  let background: Slide['background'];
  let inset: Slide['inset'];
  let body = content;
  if (layout === 'photo') {
    body = content.replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, (match, alt, src) => {
      if (!background) background = { src, alt };
      else if (!inset) inset = { src, alt };
      else return match;
      return '';
    });
  }

  const [left, right] = body.split(/^::right::\s*$/m);
  const heading = (content.match(/^#{1,3}\s+(.+)$/m)?.[1] ?? '').replace(/[*_`]/g, '');

  return {
    index,
    layout,
    html: renderMarkdown(left),
    rightHtml: layout === 'two-col' && right ? renderMarkdown(right) : undefined,
    background,
    inset,
    notes: notes.length ? marked.parse(notes.join('\n\n'), { async: false }) : '',
    heading,
  };
}

export function getDecks(): Deck[] {
  return Object.entries(files)
    .map(([path, raw]) => {
      const slug = path.split('/').pop()!.replace(/\.md$/, '');
      const { data, body } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title ?? slug,
        subtitle: data.subtitle ?? '',
        titleKm: data.title_km ?? '',
        subtitleKm: data.subtitle_km ?? '',
        eyebrow: data.eyebrow ?? '',
        draft: data.draft === 'true',
        order: Number(data.order ?? 99),
        slides: splitSlides(body).map(parseSlide),
      };
    })
    .filter((deck) => !(deck.draft && import.meta.env.PROD))
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}
