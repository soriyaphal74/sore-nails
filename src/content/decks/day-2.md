---
title: Day 2 — Build your own
title_km: ថ្ងៃទី ២ — បង្កើតគេហទំព័ររបស់អ្នក
subtitle: Your idea, your website, live on the internet by the end
subtitle_km: គំនិតរបស់អ្នក គេហទំព័ររបស់អ្នក ដំណើរការលើអ៊ីនធឺណិតនៅចុងថ្ងៃ
eyebrow: Day 2
draft: true
order: 2
---

<!-- layout: title -->

# Build your own
km: បង្កើតគេហទំព័រផ្ទាល់ខ្លួនរបស់អ្នក

Day 2
km: ថ្ងៃទី ២

---

<!-- layout: statement -->

## What's your **idea?**
km: តើ**គំនិត**របស់អ្នកជាអ្វី?

One sentence each: what is it, and who is it for?
km: ម្នាក់មួយប្រយោគ៖ វាជាអ្វី ហើយសម្រាប់នរណា?

<!-- notes:
Go around the room. If someone is stuck, offer one from yesterday's whiteboard list.
-->

---

## Your tools today
km: ឧបករណ៍របស់អ្នកសម្រាប់ថ្ងៃនេះ

- **Claude app, Code tab** — the AI you talk to. It changes your files and shows you the website
  km: **កម្មវិធី Claude ផ្ទាំង Code** — AI ដែលអ្នកនិយាយជាមួយ។ វាកែឯកសាររបស់អ្នក ហើយបង្ហាញគេហទំព័រ
- **VS Code** — look through all your files (optional)
  km: **VS Code** — មើលឯកសារទាំងអស់របស់អ្នក (មិនចាំបាច់)
- **GitHub + Cloudflare** — put it online
  km: **GitHub + Cloudflare** — ដាក់វានៅលើអ៊ីនធឺណិត

---

## Step 1 · Get your copy
km: ជំហានទី ១ · យកច្បាប់ចម្លងរបស់អ្នក

1. Go to the **template repository** on GitHub
   km: ចូលទៅកាន់ **template repository** នៅលើ GitHub
2. Click **Use this template** → **Create a new repository**
   km: ចុច **Use this template** → **Create a new repository**
3. Give it a name, like `my-bakery-site`
   km: ដាក់ឈ្មោះវា ដូចជា `my-bakery-site`

Now you have your own copy. You can't break mine. 🙂
km: ឥឡូវអ្នកមានច្បាប់ចម្លងផ្ទាល់ខ្លួនហើយ។ អ្នកមិនអាចធ្វើឱ្យរបស់ខ្ញុំខូចបានទេ។ 🙂

<!-- notes:
Put the template URL on the whiteboard. Use "Use this template", NOT "Fork" — a fork
sends their changes back toward your repo.
-->

---

## Step 2 · Put it on your computer
km: ជំហានទី ២ · ដាក់វានៅលើកុំព្យូទ័ររបស់អ្នក

In the Claude app, **Code** tab, in your **Projects** folder, ask:
km: នៅក្នុងកម្មវិធី Claude ផ្ទាំង **Code** ក្នុងថត **Projects** របស់អ្នក សូមប្រាប់៖

> Clone my GitHub repository my-bakery-site into this folder and install it.
> km: សូមចម្លង GitHub repository my-bakery-site របស់ខ្ញុំមកក្នុងថតនេះ ហើយដំឡើងវា។

Then start a **new session** and choose the **my-bakery-site** folder.
km: បន្ទាប់មក ចាប់ផ្តើម **session ថ្មី** ហើយជ្រើសរើសថត **my-bakery-site**។

<!-- notes:
Walk the room. Most problems here are typos or being in the wrong folder.
Anyone who skipped Mac setup: send them to the Setup deck first.
The new session matters: Claude only reads the project's CLAUDE.md and /make-it-mine
when the session is opened in the project folder itself.
-->

---

<!-- layout: statement -->

## Step 3 · Make it yours
km: ជំហានទី ៣ · ធ្វើឱ្យវាក្លាយជារបស់អ្នក

In the Code tab, type:
km: នៅក្នុងផ្ទាំង Code វាយ៖

**/make-it-mine**

It will ask you about your idea, then rebuild the site for you.
km: វានឹងសួរអ្នកអំពីគំនិតរបស់អ្នក បន្ទាប់មកបង្កើតគេហទំព័រឡើងវិញសម្រាប់អ្នក។

<!-- notes:
This command deletes the lesson slides and rewrites the homepage around their idea.
Afterwards, they ask Claude to "show me the preview" and the site opens beside the chat.
-->

---

## Step 4 · Ask, look, steer
km: ជំហានទី ៤ · ស្នើសុំ មើល ដឹកនាំ

Ask Claude to **show you the preview**, then keep asking:
km: ប្រាប់ Claude ឱ្យ**បង្ហាញការមើលជាមុន** បន្ទាប់មកបន្តស្នើសុំ៖

- "Make the headline shorter and bolder"
  km: "ធ្វើឱ្យចំណងជើងខ្លីជាងនេះ និងដិតជាងនេះ"
- "Use colors that feel like fresh bread"
  km: "ប្រើពណ៌ដែលមានអារម្មណ៍ដូចនំបុ័ងថ្មីៗ"
- "Add a section with three prices"
  km: "បន្ថែមផ្នែកមួយដែលមានតម្លៃបីកម្រិត"
- "It looks broken on my phone — fix it"
  km: "វាមើលទៅខូចនៅលើទូរស័ព្ទរបស់ខ្ញុំ — សូមជួសជុលវា"

**Be specific.** "Make it better" is hard. "Make the title bigger" is easy.
km: **និយាយឱ្យជាក់លាក់។** "ធ្វើឱ្យវាល្អជាងនេះ" គឺពិបាក។ "ធ្វើឱ្យចំណងជើងធំជាងនេះ" គឺងាយស្រួល។

---

<!-- layout: section -->

## Putting it online
km: ដាក់វានៅលើអ៊ីនធឺណិត

---

## Step 5 · Connect Cloudflare (once)
km: ជំហានទី ៥ · ភ្ជាប់ Cloudflare (តែម្តងប៉ុណ្ណោះ)

1. Cloudflare dashboard → **Workers & Pages** → **Create**
   km: ផ្ទាំងគ្រប់គ្រង Cloudflare → **Workers & Pages** → **Create**
2. **Import a repository** → connect GitHub → pick your repo
   km: **Import a repository** → ភ្ជាប់ GitHub → ជ្រើសរើស repo របស់អ្នក
3. Click **Deploy**
   km: ចុច **Deploy**

A minute later you get a link: `your-site.your-name.workers.dev`
km: មួយនាទីក្រោយមក អ្នកនឹងទទួលបានតំណភ្ជាប់មួយ៖ `your-site.your-name.workers.dev`

That's your website. On the internet. 🎉
km: នោះជាគេហទំព័ររបស់អ្នក។ នៅលើអ៊ីនធឺណិត។ 🎉

<!-- notes:
Do this together, step by step. If the build fails, the usual cause is the Worker
name not matching "name" in wrangler.jsonc. Ask Claude to fix it.
Fallback if GitHub won't connect: npm run build, then drag the dist folder into a Cloudflare Pages upload.
-->

---

## Saving your work: Git in 30 seconds
km: ការរក្សាទុកការងាររបស់អ្នក៖ Git ក្នុងរយៈពេល ៣០ វិនាទី

| Word <span class="km" lang="km">ពាក្យ</span> | Means <span class="km" lang="km">អត្ថន័យ</span> |
| --- | --- |
| **commit** | a save point <span class="km" lang="km">ចំណុចរក្សាទុក</span> |
| **push** | send your save points to GitHub <span class="km" lang="km">ផ្ញើចំណុចរក្សាទុករបស់អ្នកទៅ GitHub</span> |
| **branch** | a draft copy you can try things on <span class="km" lang="km">ច្បាប់ចម្លងព្រាងសម្រាប់សាកល្បងអ្វីៗ</span> |
| **pull request** | "here's my draft — preview it, then accept it" <span class="km" lang="km">&quot;នេះជាសេចក្តីព្រាងរបស់ខ្ញុំ — មើលវាជាមុន រួចទទួលយកវា&quot;</span> |

You can just ask Claude: *"commit and push my changes."*
km: អ្នកគ្រាន់តែប្រាប់ Claude៖ *"commit ហើយ push ការផ្លាស់ប្តូររបស់ខ្ញុំ។"*

<!-- notes:
Only go deep here if they hit a wall. The one idea that matters: every push makes
Cloudflare rebuild the site automatically.
-->

---

<!-- layout: two-col -->

## Preview links
km: តំណភ្ជាប់មើលជាមុន

Change something on a **branch**, open a **pull request**, and Cloudflare gives you a private preview link.
km: ផ្លាស់ប្តូរអ្វីមួយនៅលើ **branch** បើក **pull request** ហើយ Cloudflare នឹងផ្តល់តំណភ្ជាប់មើលជាមុនឯកជនមួយឱ្យអ្នក។

Like it? **Merge** — and your real site updates.
km: ចូលចិត្តវាទេ? **Merge** — ហើយគេហទំព័រពិតរបស់អ្នកនឹងធ្វើបច្ចុប្បន្នភាព។

::right::

> "Make a branch called new-prices, change the prices section, and open a pull request."
> km: "បង្កើត branch មួយឈ្មោះ new-prices កែផ្នែកតម្លៃ ហើយបើក pull request។"

---

<!-- layout: statement -->

## Goal for today
km: គោលដៅសម្រាប់ថ្ងៃនេះ

**Your** website, live, at a link you can send your family.
km: គេហទំព័រ**របស់អ្នក** ដំណើរការពិតប្រាកដ ជាមួយតំណភ្ជាប់ដែលអ្នកអាចផ្ញើទៅគ្រួសារ។
