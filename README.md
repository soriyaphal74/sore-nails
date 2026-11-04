# Vibe Code Cambodia

This is a real website that you can copy and change into **your own** website, just by talking to an AI.

Right now it's the website for a vibe coding workshop at New Hope Cambodia. It has a homepage, plus the workshop's slides at `/lesson`.

## New computer? Set it up first

Follow the setup guide: it's at `/setup` on the website, or here: **[Mac](docs/mac-setup.md)** · **[Windows](docs/windows-setup.md)**. You install the Claude app, then the AI helps you install everything else.

## Make your own copy

1. On GitHub, click the green **Use this template** button, then **Create a new repository**. (Use this button, *not* "Fork".)
2. Give your repository a name, like `my-bakery-site`.
3. In the Claude app, open the **Code** tab in your Projects folder and ask: *"Clone my GitHub repository my-bakery-site into this folder and install it."*
4. Start a **new session** in the `my-bakery-site` folder, type **`/make-it-mine`**, and answer its questions. It turns this into a website for your idea.
5. Ask Claude to **show you the preview**. Your site opens next to the chat, and it updates as the AI makes changes.

Prefer the Terminal? `gh repo clone my-bakery-site && cd my-bakery-site && nvm use && npm install && claude` works too, and `npm run dev` shows the site at http://localhost:4321.

From here, just ask for what you want: *"make the headline bigger"*, *"add a section with our prices"*, *"it looks broken on my phone"*.

## Put it on the internet (one-time setup)

1. Log in to [Cloudflare](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → **Create** → **Import a repository**.
3. Connect your GitHub account and choose your repository.
4. Keep the default settings (build command `npm run build`, deploy command `npx wrangler deploy`) and click **Deploy**. If the build command box is empty, that's fine too: the deploy builds the site itself.

A minute later you'll have a link like `my-bakery-site.your-name.workers.dev`. That's your live website.

After this, it's automatic:

- **Push to `main`** → your live site updates.
- **Push a branch or open a pull request** → you get a private **preview link** to check the change first.

There are no API keys or secrets to set up. Cloudflare builds the site itself.

> **If the build fails:** the `name` in `wrangler.jsonc` must match the Worker name in Cloudflare. Ask Claude: *"change the name in wrangler.jsonc to ___"*, then commit and push.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Preview the site on your computer, at http://localhost:4321 |
| `npm run build` | Build the finished site into the `dist/` folder |
| `npm run preview` | Build, then preview it exactly as Cloudflare will serve it |
| `npm run deploy` | Build and publish to Cloudflare by hand (you usually don't need this) |

## Where things are

- `src/pages/index.astro` — the homepage
- `src/site.ts` — site name, tagline, contact email
- `src/styles/global.css` — colors and fonts
- `src/content/decks/` — slide decks, written in Markdown ([how to edit slides](docs/editing-slides.md))
- `public/` — images and other files
- `CLAUDE.md` — instructions the AI reads before helping you

## Backup plan: publish without GitHub

If the GitHub connection isn't working, run `npm run build`. Then in Cloudflare go to **Workers & Pages** → **Create** → **Pages** → **Upload assets**, and drag in the `dist` folder.

---

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [Cloudflare Workers](https://workers.cloudflare.com).
