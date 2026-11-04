# CLAUDE.md

This is a marketing website built with Astro and Tailwind CSS, deployed to Cloudflare Workers.

## Who you are working with

The person you're helping is most likely a **beginner** at a workshop in Cambodia, learning to build websites by talking to AI. They may never have written code. English may be their second language.

- **Use simple, short sentences.** Avoid jargon. When a technical word is needed (like "commit" or "component"), explain it in one plain sentence the first time.
- **If they write in Khmer, reply in Khmer.** Keep code, file names, and commands in English.
- **Make one change at a time** and say what you changed in one or two sentences, e.g. "I made the headline bigger and changed the button to orange. Look at your browser to see it." Don't dump long explanations or full code listings in chat.
- **Show them the result.** Most students use the Claude desktop app: start the preview with the `dev` configuration in `.claude/launch.json` so the site appears next to the chat, then say which page to look at. In a plain terminal, `npm run dev` serves it at http://localhost:4321.
- **When something breaks, stay calm and fix it.** Explain the cause in one sentence. Never blame them.
- **Ask before big or destructive steps**, like deleting pages, changing the whole design, or anything with git history.
- If a request is unclear, make a sensible choice, do it, and say what you assumed. Beginners learn more from seeing a result than from answering questions.

## Commands

- `npm run dev` — start the local preview at http://localhost:4321 (it updates live as files change)
- `npm run build` — build the site into `dist/`. **Run this before saying a change is done**, and fix any errors.
- `npm run deploy` — build and publish to Cloudflare by hand (usually not needed: pushing to GitHub publishes automatically)

## Where things are

| What | Where |
| --- | --- |
| Site name, tagline, contact email | `src/site.ts` |
| Colors and fonts (the whole site's look) | `src/styles/global.css`, in the `@theme` block |
| Homepage | `src/pages/index.astro` |
| Header and footer | `src/components/Header.astro`, `src/components/Footer.astro` |
| Shared page frame (`<head>`, fonts) | `src/layouts/Base.astro` |
| Slide decks (Markdown) | `src/content/decks/*.md` → shown at `/lesson/<file-name>` |
| How to write slides | `docs/editing-slides.md` |
| Setting up a computer for development | `docs/mac-setup.md` and `docs/windows-setup.md` (shown on the site at `/setup` by `src/pages/setup.astro`) |
| Images and other files | `public/` (a file at `public/photo.jpg` is used as `/photo.jpg`) |
| Cloudflare settings | `wrangler.jsonc` |

New pages: a file at `src/pages/about.astro` becomes the page `/about`.

## How to build things here

- **Style with Tailwind classes** and the theme colors (`bg-brand`, `text-ink`, `bg-paper`, `text-muted`, `bg-sun`, `bg-leaf`). To change the site's colors, edit `@theme` in `global.css` instead of hunting through every page.
- **Every page must look good on phones.** Design for small screens first, then add `sm:`/`md:`/`lg:` classes for bigger screens. Many visitors in Cambodia will only use a phone.
- **Keep it simple.** This is a static site. Don't add React, a database, a backend, or new npm packages unless the person asks for something that truly needs one. If they do, explain the tradeoff first.
- **Khmer text:** put `lang="km"` on elements that contain Khmer (e.g. `<p lang="km">`) so the Khmer font and line spacing apply. For a bilingual site, put a Khmer caption under each English line with `<span class="km" lang="km">…</span>` (in Markdown: a line starting with `km:`; see `docs/editing-slides.md`). Suggest that a native speaker checks any Khmer you write.
- **Images:** put them in `public/`, always add an `alt` description, and keep files small (under ~300 KB) for slow connections.
- **Contact forms:** a static site can't send email by itself. The simplest option is a free form service (like Formspree) or a `mailto:` link. Explain this before building one.

## Git and publishing

- Pushing to the `main` branch on GitHub publishes the live site automatically (Cloudflare Workers Builds).
- Pushing any other branch, or opening a pull request, creates a **preview link** without changing the live site.
- When asked to "save" or "publish", commit with a short, clear message and push. Explain: a commit is a save point; push sends it to GitHub.
- Never force-push or rewrite history unless they explicitly ask and understand what it means.
- If a Cloudflare build fails, first check that `"name"` in `wrangler.jsonc` matches the Worker name in the Cloudflare dashboard. That mismatch is the most common cause.

## Helping set up their computer

If they ask for help installing tools (Homebrew, git, Node, VS Code…), follow `docs/mac-setup.md` on a Mac or `docs/windows-setup.md` on Windows. Explain each tool in one sentence before installing it. For anything that needs their Mac password (`sudo`, the Homebrew installer) or opens a popup, give them the exact command to paste into Terminal themselves (remind them: ⌘ Space, type Terminal, Return), and wait for them to say it's done. On Windows, the same goes for administrator popups, using PowerShell (Windows key, type PowerShell, Enter). Use nvm for Node on a Mac, with the version in `.nvmrc`; on Windows, install the Node.js LTS with winget.

## Making the site your own

If this is still the workshop template (the homepage talks about the "Vibe Code Cambodia" workshop) and the person wants their own site, suggest the `/make-it-mine` command.
