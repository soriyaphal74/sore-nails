# Set up your Mac for building websites
km: រៀបចំកុំព្យូទ័រ Mac របស់អ្នក សម្រាប់បង្កើតគេហទំព័រ

You're going to set up your Mac the way professional developers do — but you're not going to do it by hand. You'll install **one** app yourself (Claude), and then ask the AI to set up everything else, step by step, explaining as it goes.
km: អ្នកនឹងរៀបចំកុំព្យូទ័រ Mac របស់អ្នកដូចអ្នកអភិវឌ្ឍន៍អាជីព — ប៉ុន្តែមិនមែនធ្វើដោយដៃទាំងអស់ទេ។ អ្នកដំឡើងកម្មវិធីតែ**មួយ**ដោយខ្លួនឯង (Claude) បន្ទាប់មកប្រាប់ AI ឱ្យរៀបចំអ្វីៗផ្សេងទៀត មួយជំហានម្តងៗ ហើយពន្យល់ពេលកំពុងធ្វើ។

This is the most important skill in this workshop: **when you don't know how to do something, ask the AI to do it with you.**
km: នេះជាជំនាញសំខាន់បំផុតក្នុងវគ្គនេះ៖ **ពេលអ្នកមិនដឹងពីរបៀបធ្វើអ្វីមួយ សូមប្រាប់ AI ឱ្យធ្វើវាជាមួយអ្នក។**

## What gets installed, and why
km: អ្វីដែលត្រូវដំឡើង និងហេតុអ្វី

| Tool <span class="km" lang="km">ឧបករណ៍</span> | What it is <span class="km" lang="km">វាជាអ្វី</span> | Why you need it <span class="km" lang="km">ហេតុអ្វីអ្នកត្រូវការវា</span> |
| --- | --- | --- |
| **Claude app** | The AI app. Its **Code** tab writes code and runs commands for you <span class="km" lang="km">កម្មវិធី AI។ ផ្ទាំង **Code** របស់វាសរសេរកូដ និងដំណើរការពាក្យបញ្ជាជំនួសអ្នក</span> | It does the rest of this setup with you <span class="km" lang="km">វាធ្វើការរៀបចំផ្នែកផ្សេងទៀតជាមួយអ្នក</span> |
| **Terminal** | A window where you type commands to your Mac <span class="km" lang="km">ផ្ទាំងសម្រាប់វាយពាក្យបញ្ជាទៅកុំព្យូទ័រ Mac</span> | Already on every Mac. You'll use it for the steps that need your password <span class="km" lang="km">មានស្រាប់លើ Mac គ្រប់គ្រឿង។ អ្នកប្រើវាសម្រាប់ជំហានដែលត្រូវការពាក្យសម្ងាត់</span> |
| **Xcode Command Line Tools** | Apple's basic tools for developers <span class="km" lang="km">ឧបករណ៍មូលដ្ឋានរបស់ Apple សម្រាប់អ្នកអភិវឌ្ឍន៍</span> | Many other tools need them. Includes **git** <span class="km" lang="km">ឧបករណ៍ជាច្រើនទៀតត្រូវការវា។ មាន **git** ផងដែរ</span> |
| **Homebrew** | An "app store" for developer tools, used from Terminal <span class="km" lang="km">"ហាងកម្មវិធី" សម្រាប់ឧបករណ៍អ្នកអភិវឌ្ឍន៍ ប្រើពី Terminal</span> | Makes installing everything else one command <span class="km" lang="km">ធ្វើឱ្យការដំឡើងអ្វីៗផ្សេងទៀតត្រូវការពាក្យបញ្ជាតែមួយ</span> |
| **git** | Keeps every version of your files, like save points in a game <span class="km" lang="km">រក្សាទុកគ្រប់កំណែនៃឯកសាររបស់អ្នក ដូចចំណុចរក្សាទុកក្នុងហ្គេម</span> | So you can always go back, and send your work to GitHub <span class="km" lang="km">ដើម្បីឱ្យអ្នកអាចត្រឡប់ក្រោយវិញបានជានិច្ច ហើយផ្ញើការងារទៅ GitHub</span> |
| **GitHub CLI** (`gh`) | Connects your Mac to your GitHub account <span class="km" lang="km">ភ្ជាប់ Mac របស់អ្នកទៅគណនី GitHub</span> | Lets you push your website to GitHub without passwords <span class="km" lang="km">អនុញ្ញាតឱ្យអ្នកផ្ញើគេហទំព័រទៅ GitHub ដោយមិនបាច់វាយពាក្យសម្ងាត់</span> |
| **nvm + Node.js** | Node runs JavaScript tools on your computer; nvm installs and switches Node versions <span class="km" lang="km">Node ដំណើរការឧបករណ៍ JavaScript លើកុំព្យូទ័ររបស់អ្នក។ nvm ដំឡើង និងប្តូរកំណែ Node</span> | Astro (what builds your website) runs on Node <span class="km" lang="km">Astro (អ្វីដែលបង្កើតគេហទំព័ររបស់អ្នក) ដំណើរការលើ Node</span> |
| **VS Code** | A text editor for code <span class="km" lang="km">កម្មវិធីកែសម្រួលអត្ថបទសម្រាប់កូដ</span> | Handy for looking through all your files (optional, the Claude app shows changes too) <span class="km" lang="km">ងាយស្រួលសម្រាប់មើលឯកសារទាំងអស់ (មិនចាំបាច់ទេ ព្រោះកម្មវិធី Claude ក៏បង្ហាញការផ្លាស់ប្តូរដែរ)</span> |

## Step 1 · Install the Claude app
km: ជំហានទី ១ · ដំឡើងកម្មវិធី Claude

1. Go to **[claude.ai/download](https://claude.ai/download)** and download the Mac app.
   km: ចូលទៅកាន់ **claude.ai/download** ហើយទាញយកកម្មវិធីសម្រាប់ Mac។
2. Open the download and drag **Claude** into **Applications**.
   km: បើកឯកសារដែលបានទាញយក ហើយអូស **Claude** ចូលទៅក្នុង **Applications**។
3. Open Claude and log in with your Claude account.
   km: បើក Claude ហើយចូលដោយប្រើគណនី Claude របស់អ្នក។

## Step 2 · Make a Projects folder
km: ជំហានទី ២ · បង្កើតថត Projects

In **Finder**, go to your home folder (**⌘ Shift H**) and make a new folder called **Projects**. Your websites will live here.
km: នៅក្នុង **Finder** ចូលទៅកាន់ថតដើមរបស់អ្នក (**⌘ Shift H**) ហើយបង្កើតថតថ្មីមួយឈ្មោះ **Projects**។ គេហទំព័ររបស់អ្នកនឹងរក្សាទុកនៅទីនេះ។

## Step 3 · Ask Claude to set up the rest
km: ជំហានទី ៣ · ប្រាប់ Claude ឱ្យរៀបចំផ្នែកដែលនៅសល់

In the Claude app, open the **Code** tab, choose your **Projects** folder, and paste this message:
km: នៅក្នុងកម្មវិធី Claude បើកផ្ទាំង **Code** ជ្រើសរើសថត **Projects** របស់អ្នក ហើយបិទភ្ជាប់សារនេះ (ជាភាសាអង់គ្លេស ឬភាសាខ្មែរក៏បាន)៖

> Help me set up this Mac for web development. I'm a beginner. Please check what's already installed, then install whatever is missing from this list, one at a time: Xcode Command Line Tools, Homebrew, git, the GitHub CLI, nvm with the latest LTS version of Node.js, and VS Code (with the `code` command in the Terminal).
> km: សូមជួយខ្ញុំរៀបចំកុំព្យូទ័រ Mac នេះសម្រាប់ការអភិវឌ្ឍគេហទំព័រ។ ខ្ញុំជាអ្នកទើបចាប់ផ្តើម។ សូមពិនិត្យមើលថាអ្វីខ្លះត្រូវបានដំឡើងរួចហើយ បន្ទាប់មកដំឡើងអ្វីដែលនៅខ្វះពីបញ្ជីនេះ ម្តងមួយៗ៖ Xcode Command Line Tools, Homebrew, git, GitHub CLI, nvm ជាមួយកំណែ LTS ចុងក្រោយរបស់ Node.js និង VS Code (ជាមួយពាក្យបញ្ជា `code` នៅក្នុង Terminal)។
>
> Before each step, tell me in one sentence what it is and why I need it. If a step needs my Mac password or a popup window, give me the exact command to paste into Terminal myself (and remind me how to open Terminal), and wait for me to say "done". After each step, check that it worked.
> km: មុនជំហាននីមួយៗ សូមប្រាប់ខ្ញុំមួយប្រយោគថាវាជាអ្វី និងហេតុអ្វីខ្ញុំត្រូវការវា។ ប្រសិនបើជំហានណាមួយត្រូវការពាក្យសម្ងាត់ Mac របស់ខ្ញុំ ឬមានផ្ទាំងលោតឡើង សូមផ្តល់ពាក្យបញ្ជាពិតប្រាកដឱ្យខ្ញុំបិទភ្ជាប់ក្នុង Terminal ដោយខ្លួនឯង (ហើយរំលឹកខ្ញុំពីរបៀបបើក Terminal) រួចរង់ចាំខ្ញុំនិយាយថា "រួចរាល់"។ បន្ទាប់ពីជំហាននីមួយៗ សូមពិនិត្យថាវាដំណើរការ។
>
> At the end, help me log in to GitHub with `gh auth login`, set my git name and email, and show me a short summary of everything that's installed.
> km: នៅចុងបញ្ចប់ សូមជួយខ្ញុំចូល GitHub ដោយប្រើ `gh auth login` កំណត់ឈ្មោះ និងអ៊ីមែល git របស់ខ្ញុំ ហើយបង្ហាញសេចក្តីសង្ខេបខ្លីៗនៃអ្វីៗទាំងអស់ដែលបានដំឡើង។

Then follow along. Read what the AI says before you approve each command — that's how you learn what's happening.
km: បន្ទាប់មក ធ្វើតាម។ អានអ្វីដែល AI និយាយ មុនពេលអ្នកយល់ព្រមលើពាក្យបញ្ជានីមួយៗ — នោះជារបៀបដែលអ្នករៀនយល់ពីអ្វីដែលកំពុងកើតឡើង។

### Things that will happen
km: អ្វីដែលនឹងកើតឡើង

- **A popup about "command line developer tools."** Click **Install** and wait. This can take 10–20 minutes on slow internet.
  km: **ផ្ទាំងលោតឡើងអំពី "command line developer tools"។** ចុច **Install** ហើយរង់ចាំ។ វាអាចចំណាយពេល ១០–២០ នាទី បើអ៊ីនធឺណិតយឺត។
- **Your Mac password.** When you type it in Terminal, **nothing appears on screen** — no dots, no stars. That's normal. Type it and press Return.
  km: **ពាក្យសម្ងាត់ Mac របស់អ្នក។** ពេលអ្នកវាយវានៅក្នុង Terminal **គ្មានអ្វីបង្ហាញលើអេក្រង់ទេ** — គ្មានចំណុច គ្មានផ្កាយ។ នោះជារឿងធម្មតា។ វាយវា ហើយចុច Return។
- **Claude asks permission** before running commands. Read what it wants to run, then approve it.
  km: **Claude សុំការអនុញ្ញាត** មុនពេលដំណើរការពាក្យបញ្ជា។ អានអ្វីដែលវាចង់ដំណើរការ បន្ទាប់មកយល់ព្រម។
- **Something fails.** That's normal too. Copy the error, paste it to Claude, and say "this happened". This is the real skill.
  km: **មានអ្វីមួយបរាជ័យ។** នោះក៏ជារឿងធម្មតាដែរ។ ចម្លងកំហុស បិទភ្ជាប់ទៅ Claude ហើយនិយាយថា "រឿងនេះបានកើតឡើង"។ នេះជាជំនាញពិតប្រាកដ។

## Step 4 · Check it worked
km: ជំហានទី ៤ · ពិនិត្យថាវាដំណើរការ

Ask Claude: *"Check that git, node, npm, gh, and code all work, and that I'm logged in to GitHub."*
km: ប្រាប់ Claude៖ *"សូមពិនិត្យថា git, node, npm, gh និង code ដំណើរការទាំងអស់ ហើយខ្ញុំបានចូល GitHub រួចហើយ។"*

Or run it yourself:
km: ឬដំណើរការវាដោយខ្លួនឯង៖

```bash
git --version && node --version && npm --version && gh auth status && code --version
```

Every line should print a version number or "Logged in". You're ready.
km: បន្ទាត់នីមួយៗគួរតែបង្ហាញលេខកំណែ ឬ "Logged in"។ អ្នករួចរាល់ហើយ។

To open Terminal: press **⌘ Space**, type **Terminal**, press **Return**.
km: ដើម្បីបើក Terminal៖ ចុច **⌘ Space** វាយ **Terminal** ហើយចុច **Return**។

## If the Claude app won't install or log in
km: ប្រសិនបើកម្មវិធី Claude មិនអាចដំឡើង ឬចូលបាន

Use [claude.ai](https://claude.ai) in your web browser instead. Paste the same Step 3 message, and add: *"Give me each command to paste into Terminal myself."* It's slower, because you copy and paste every command, but it works the same way. Then try the app again.
km: ប្រើ claude.ai នៅក្នុងកម្មវិធីរុករកបណ្តាញជំនួសវិញ។ បិទភ្ជាប់សារដដែលពីជំហានទី ៣ ហើយបន្ថែម៖ *"សូមផ្តល់ពាក្យបញ្ជានីមួយៗឱ្យខ្ញុំបិទភ្ជាប់ក្នុង Terminal ដោយខ្លួនឯង។"* វាយឺតជាង ព្រោះអ្នកត្រូវចម្លង និងបិទភ្ជាប់គ្រប់ពាក្យបញ្ជា ប៉ុន្តែវាដំណើរការដូចគ្នា។ បន្ទាប់មក សាកល្បងកម្មវិធីម្តងទៀត។
