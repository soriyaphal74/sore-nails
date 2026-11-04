# Editing slides

Each slide deck is one Markdown file in `src/content/decks/`. The file name becomes the URL:
`src/content/decks/day-1.md` → `/lesson/day-1`.

To make a new deck, copy an existing file, rename it, and change the text. To delete one, delete the file.

## The basics

```md
---
title: My deck
subtitle: Shown on the lessons page
order: 4
---

# First slide

Some text.

---

## Second slide

- A bullet
- Another bullet
```

- The block at the very top (between the first two `---` lines) holds the deck's settings. `order` sets where it appears in the list. Add `draft: true` to keep a deck off the live site while you work on it (it still shows up in your local preview).
- **A line with only `---` starts a new slide.**
- Everything else is normal Markdown: `#` headings, `- bullets`, `**bold**`, `[links](https://…)`, `![images](/photo.jpg)`, tables, and code blocks.

## Layouts

Put a layout comment anywhere in a slide to change how it looks:

| Comment | Looks like |
| --- | --- |
| *(none)* | Heading and content, left-aligned |
| `<!-- layout: title -->` | Big, centered title slide |
| `<!-- layout: section -->` | Full brand-color background, for starting a new part |
| `<!-- layout: statement -->` | Dark background, one big centered message |
| `<!-- layout: two-col -->` | Two columns, split by a line with only `::right::` |
| `<!-- layout: photo -->` | The slide's first image fills the whole screen, with the text on top. A second image shows as a small card in the top-right corner |
| `<!-- layout: gallery -->` | Heading, then all the slide's images in a neat grid |
| `<!-- layout: image -->` | One picture, as big as fits the screen, never cropped. Good for maps and diagrams |
| `<!-- layout: cards -->` | Each list item becomes a card (numbered if it's a `1.` list). Start each item with a short title line, then a blank line, then the description |

```md
<!-- layout: two-col -->

## Left side

Text on the left.

::right::

![A photo](/photo.jpg)
```

## Images

Put image files in `public/` (for example `public/decks/day-1/seattle.jpg`) and use them like this:

```md
![A description of the photo](/decks/day-1/seattle.jpg)
![A description of the photo](/decks/day-1/seattle.jpg "A caption shown under it")
```

Keep photos under about 300 KB (around 1600 pixels wide) so slides load fast on slow internet.

To add a new layout, add its name to `LAYOUTS` in `src/lib/decks.ts` and add `.layout-yourname` styles in `src/components/Deck.astro`.

## Khmer captions

Put a line starting with `km:` right under any line to show a Khmer caption beneath it:

```md
## The goal
km: គោលដៅ

Build a website by vibe coding.
km: បង្កើតគេហទំព័រ តាមរយៈ vibe coding។

- A bullet
  km: ចំណុចមួយ

> A prompt
> km: សំណើមួយ
```

In tables, and in image captions, use `<span class="km" lang="km">ខ្មែរ</span>`, or for an image add the Khmer after ` | `: `![alt](/photo.jpg "Caption | ចំណងជើង")`.

## Speaker notes

```md
<!-- notes:
Only you see this. Remind yourself to pause here.
-->
```

Notes can be several lines long and use Markdown.

## Presenting

Open a deck, then:

| Key | Does |
| --- | --- |
| → ↓ Space / ← ↑ | Next / previous slide (a presentation clicker works too) |
| **P** | Open the presenter window: notes, timer, next-slide preview. It stays in sync with the main window, so put the main window on the projector and keep this one on your laptop |
| **N** | Show notes beside the slide in the same window |
| **F** | Full screen |
| **?** | Show all shortcuts |
| ⌘P / Ctrl+P | Print, or save as a PDF with one slide per page (a good backup if the internet goes down) |

The URL shows which slide you're on (e.g. `/lesson/day-1#5`), so you can link straight to a slide. On phones, the deck becomes a normal scrolling page.
