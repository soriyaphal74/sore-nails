---
title: Setup — Get your Mac ready
title_km: រៀបចំ — ត្រៀមកុំព្យូទ័រ Mac របស់អ្នក
subtitle: Install one app yourself, then let the AI set up the rest
subtitle_km: ដំឡើងកម្មវិធីមួយដោយខ្លួនឯង បន្ទាប់មកឱ្យ AI រៀបចំផ្នែកដែលនៅសល់
eyebrow: Before Day 2
draft: true
order: 1.5
---

<!-- layout: title -->

# Get your Mac ready
km: រៀបចំកុំព្យូទ័រ Mac របស់អ្នក

Let the AI set up your computer.
km: ឱ្យ AI រៀបចំកុំព្យូទ័ររបស់អ្នក។

<!-- notes:
Do this at the end of Day 1, after accounts, or first thing on Day 2.
The full written guide is at /setup on this site, with copy buttons for every command and the setup message. Have it open on the projector as a backup.
-->

---

<!-- layout: statement -->

## You install **one** app.
km: អ្នកដំឡើងកម្មវិធីតែ**មួយ**ប៉ុណ្ណោះ។

The AI installs everything else, and explains it as it goes.
km: AI ដំឡើងអ្វីៗផ្សេងទៀតទាំងអស់ ហើយពន្យល់ពេលកំពុងធ្វើ។

<!-- notes:
This is "teach them to fish". Setting up a dev machine is something real developers
google every time. Now we ask the AI instead.
-->

---

## What a developer's Mac has
km: អ្វីដែលមាននៅក្នុង Mac របស់អ្នកអភិវឌ្ឍន៍

| Tool <span class="km" lang="km">ឧបករណ៍</span> | It's like… <span class="km" lang="km">វាដូចជា…</span> |
| --- | --- |
| **Claude app** | An assistant who can use your computer <span class="km" lang="km">ជំនួយការដែលអាចប្រើកុំព្យូទ័ររបស់អ្នក</span> |
| **Terminal** | Texting your computer <span class="km" lang="km">ការផ្ញើសារទៅកុំព្យូទ័ររបស់អ្នក</span> |
| **Homebrew** | An app store for developer tools <span class="km" lang="km">ហាងកម្មវិធីសម្រាប់ឧបករណ៍អ្នកអភិវឌ្ឍន៍</span> |
| **git** | Save points in a game <span class="km" lang="km">ចំណុចរក្សាទុកក្នុងហ្គេម</span> |
| **Node.js** | The engine that builds your website <span class="km" lang="km">ម៉ាស៊ីនដែលបង្កើតគេហទំព័ររបស់អ្នក</span> |
| **VS Code** | Notepad, but for code <span class="km" lang="km">ដូច Notepad ប៉ុន្តែសម្រាប់កូដ</span> |

<!-- notes:
Don't explain these deeply. They'll hear each one again from Claude during setup.
-->

---

## Step 1 · Get the Claude app
km: ជំហានទី ១ · ទាញយកកម្មវិធី Claude

1. Go to **claude.ai/download**
   km: ចូលទៅកាន់ **claude.ai/download**
2. Download the Mac app, drag it into **Applications**
   km: ទាញយកកម្មវិធីសម្រាប់ Mac ហើយអូសវាចូលក្នុង **Applications**
3. Open it and log in
   km: បើកវា ហើយចូលគណនី

<!-- notes:
Write claude.ai/download on the whiteboard.
If login fails for anyone, pair them with a neighbor, or switch them to the
claude.ai-in-the-browser fallback (last slide).
-->

---

## Step 2 · Make a home for your work
km: ជំហានទី ២ · បង្កើតកន្លែងសម្រាប់ការងាររបស់អ្នក

In **Finder**, press **⌘ Shift H**, and make a new folder called **Projects**.
km: នៅក្នុង **Finder** ចុច **⌘ Shift H** ហើយបង្កើតថតថ្មីមួយឈ្មោះ **Projects**។

Then in the Claude app: **Code** tab → choose **Projects**.
km: បន្ទាប់មក នៅក្នុងកម្មវិធី Claude៖ ផ្ទាំង **Code** → ជ្រើសរើស **Projects**។

<!-- notes:
Everyone using the same folder name makes it much easier to help them.
-->

---

<!-- layout: two-col -->

## Step 3 · Ask for help
km: ជំហានទី ៣ · សុំជំនួយ

Paste the setup message from the guide into the **Code** tab.
km: បិទភ្ជាប់សាររៀបចំពីការណែនាំ ទៅក្នុងផ្ទាំង **Code**។

It asks Claude to install everything, **one step at a time**, and to explain each step first.
km: វាប្រាប់ Claude ឱ្យដំឡើងអ្វីៗទាំងអស់ **ម្តងមួយជំហាន** ហើយពន្យល់ជំហាននីមួយៗជាមុនសិន។

::right::

> Help me set up this Mac for web development. I'm a beginner…
> km: សូមជួយខ្ញុំរៀបចំកុំព្យូទ័រ Mac នេះសម្រាប់ការអភិវឌ្ឍគេហទំព័រ។ ខ្ញុំជាអ្នកទើបចាប់ផ្តើម…

Copy it from the **[setup guide →](/setup)**
km: ចម្លងវាពី**ការណែនាំរៀបចំ** (ភាសាអង់គ្លេស ឬខ្មែរ)

<!-- notes:
The setup guide at /setup has a "Copy message" button for this prompt.
-->

---

## What to expect
km: អ្វីដែលត្រូវរំពឹងទុក

- 💻 A **popup** asks to install developer tools → click **Install**
  km: មាន**ផ្ទាំងលោតឡើង**សុំដំឡើងឧបករណ៍អ្នកអភិវឌ្ឍន៍ → ចុច **Install**
- 🔑 Claude asks you to paste a command in **Terminal** and type your **Mac password** → **nothing shows on screen**. That's normal!
  km: Claude ប្រាប់អ្នកឱ្យបិទភ្ជាប់ពាក្យបញ្ជាក្នុង **Terminal** ហើយវាយ**ពាក្យសម្ងាត់ Mac** → **គ្មានអ្វីបង្ហាញលើអេក្រង់ទេ**។ នោះជារឿងធម្មតា!
- ✋ Claude asks **permission** before each command → **read it**, then approve
  km: Claude សុំ**ការអនុញ្ញាត**មុនពាក្យបញ្ជានីមួយៗ → **អានវា** រួចយល់ព្រម
- 💥 Something **fails** → copy the error, paste it to Claude
  km: មានអ្វីមួយ**បរាជ័យ** → ចម្លងកំហុស ហើយបិទភ្ជាប់ទៅ Claude

<!-- notes:
Say the password thing out loud twice. Everyone thinks their keyboard is broken.
Xcode Command Line Tools can take 10–20 minutes on slow wifi. Start it early.
-->

---

<!-- layout: statement -->

## Errors are **normal.**
km: កំហុសគឺជា**រឿងធម្មតា**។

Paste the error. Say what you expected. Let the AI fix it.
km: បិទភ្ជាប់កំហុស។ និយាយពីអ្វីដែលអ្នករំពឹងទុក។ ឱ្យ AI ជួសជុលវា។

That's not cheating. **That's the job.**
km: នោះមិនមែនជាការបោកប្រាស់ទេ។ **នោះហើយជាការងារ។**

---

## Step 4 · Check it worked
km: ជំហានទី ៤ · ពិនិត្យថាវាដំណើរការ

Ask Claude:
km: ប្រាប់ Claude៖

> Check that git, node, npm, gh, and code all work, and that I'm logged in to GitHub.
> km: សូមពិនិត្យថា git, node, npm, gh និង code ដំណើរការទាំងអស់ ហើយខ្ញុំបានចូល GitHub រួចហើយ។

Everything ✅? You're a developer now. 🎉
km: អ្វីៗទាំងអស់ ✅? ឥឡូវអ្នកជាអ្នកអភិវឌ្ឍន៍ហើយ។ 🎉

---

## Plan B
km: ផែនការ B

The Claude app won't install or log in?
km: កម្មវិធី Claude មិនអាចដំឡើង ឬចូលបាន?

1. Open **claude.ai** in your browser
   km: បើក **claude.ai** នៅក្នុងកម្មវិធីរុករកបណ្តាញ
2. Paste the same setup message
   km: បិទភ្ជាប់សាររៀបចំដដែល
3. Add: *"Give me each command to paste into Terminal myself."*
   km: បន្ថែម៖ *"សូមផ្តល់ពាក្យបញ្ជានីមួយៗឱ្យខ្ញុំបិទភ្ជាប់ក្នុង Terminal ដោយខ្លួនឯង។"*

Slower, but the same idea: **the AI is your guide.**
km: យឺតជាង ប៉ុន្តែគំនិតដូចគ្នា៖ **AI គឺជាអ្នកណែនាំរបស់អ្នក។**
