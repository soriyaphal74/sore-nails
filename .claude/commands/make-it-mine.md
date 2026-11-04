---
description: Turn this workshop template into your own website
---

You're helping a beginner turn this workshop template into their own marketing website. Follow CLAUDE.md: simple words, short messages, and reply in Khmer if they write in Khmer.

## 1. Interview them (one short message)

Greet them warmly in one line, then ask these questions together in one message, as a numbered list they can answer in any order or style:

1. What is your business or project called?
2. What does it do, and who is it for? (one or two sentences)
3. Where is it? (city or area, if it matters)
4. What should visitors do? (call you, visit, message on Telegram or Facebook, buy something, sign up...)
5. What colors or feeling do you want? (e.g. "warm and friendly", "green and natural", "dark and modern")
6. Language: English, Khmer, or both?

If they've already given some of this information (for example, as arguments to this command: $ARGUMENTS), don't ask for it again.

Wait for their answer. If something is missing, make a sensible guess rather than asking again, and tell them what you guessed.

## 2. Remove the workshop content

- Delete `src/content/decks/day-1.md`, `day-2.md`, `day-3.md`, and `setup.md`, and delete `src/pages/lesson/index.astro` and `src/pages/setup.astro`.
- Keep `src/pages/lesson/[deck].astro`, `src/lib/decks.ts`, `src/components/Deck.astro`, and `docs/` (the slide and computer setup guides). With no deck files, no slide pages get built, but if they add a deck later (like a pitch deck), it just works.
- Remove links to `/lesson` and `/setup` from `src/components/Header.astro` and anywhere else they appear.

## 3. Rebuild the site around their idea

- **Rename the project** to a short, lowercase, dash-separated name based on their business (e.g. `sokha-bakery`). Use their GitHub repository name if you can find it (check `git remote -v`). Set it as `"name"` in both `package.json` and `wrangler.jsonc`. Tell them this is the name to use for their Worker in Cloudflare, because it becomes their web address: `sokha-bakery.<their-account>.workers.dev`.
- `src/site.ts`: set the name, tagline, description, and contact email (always replace the workshop teacher's email; use a placeholder like `hello@example.com` and mark it TODO if you don't have a real one).
- `src/styles/global.css`: update the `@theme` colors to match the feeling they described. Keep good contrast so text stays easy to read.
- `src/pages/index.astro`: rewrite the homepage for their business. A good starting structure:
  - Hero: a clear headline, one supporting sentence, and a main button for the action from question 4
  - What we offer: 3 to 6 items
  - Why choose us, or how it works
  - A short "about us" or story
  - Contact or location, with the main action again
- `src/components/Header.astro` and `Footer.astro`: update the name and links.
- Write real, specific placeholder copy that fits their business, not "Lorem ipsum". Use emoji or simple CSS shapes instead of images for now.
- If they chose Khmer: write the Khmer text with `lang="km"` on those elements. If they chose both: keep the English and put a Khmer caption under each line with `<span class="km" lang="km">…</span>`, the way this template's homepage does. Either way, tell them to ask a Khmer speaker to check it.
- If they chose English only: remove the `km` caption lines and `<span class="km">` elements from the homepage, header, and footer.
- The site must look good on a phone.

## 4. Check and hand off

- Run `npm run build` and fix any errors.
- Start the preview (the `dev` configuration in `.claude/launch.json`; or `npm run dev` in a plain terminal) and tell them, in two or three short sentences, what you made.
- Suggest two or three specific next requests they could try, for example: "Change the headline to ___", "Add a section with our prices", or "Make the colors brighter".
- Don't commit yet. Tell them that when they're happy, they can say "commit and push" to put it online.
