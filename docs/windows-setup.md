# Set up your Windows computer for building websites
km: រៀបចំកុំព្យូទ័រ Windows របស់អ្នក សម្រាប់បង្កើតគេហទំព័រ

You're going to set up your computer the way professional developers do — but you're not going to do it by hand. You'll install **two** things yourself (Git and Claude), and then ask the AI to set up everything else, step by step, explaining as it goes.
km: អ្នកនឹងរៀបចំកុំព្យូទ័ររបស់អ្នកដូចអ្នកអភិវឌ្ឍន៍អាជីព — ប៉ុន្តែមិនមែនធ្វើដោយដៃទាំងអស់ទេ។ អ្នកដំឡើងតែ**ពីរ**ដោយខ្លួនឯង (Git និង Claude) បន្ទាប់មកប្រាប់ AI ឱ្យរៀបចំអ្វីៗផ្សេងទៀត មួយជំហានម្តងៗ ហើយពន្យល់ពេលកំពុងធ្វើ។

This is the most important skill in this workshop: **when you don't know how to do something, ask the AI to do it with you.**
km: នេះជាជំនាញសំខាន់បំផុតក្នុងវគ្គនេះ៖ **ពេលអ្នកមិនដឹងពីរបៀបធ្វើអ្វីមួយ សូមប្រាប់ AI ឱ្យធ្វើវាជាមួយអ្នក។**

You need Windows 10 or 11, and permission to install apps on this computer. If it belongs to a school or office, you may need to ask the person who manages it.
km: អ្នកត្រូវការ Windows 10 ឬ 11 និងការអនុញ្ញាតឱ្យដំឡើងកម្មវិធីលើកុំព្យូទ័រនេះ។ ប្រសិនបើវាជារបស់សាលា ឬការិយាល័យ អ្នកប្រហែលជាត្រូវសួរអ្នកដែលគ្រប់គ្រងវា។

## What gets installed, and why
km: អ្វីដែលត្រូវដំឡើង និងហេតុអ្វី

| Tool <span class="km" lang="km">ឧបករណ៍</span> | What it is <span class="km" lang="km">វាជាអ្វី</span> | Why you need it <span class="km" lang="km">ហេតុអ្វីអ្នកត្រូវការវា</span> |
| --- | --- | --- |
| **Git for Windows** | Keeps every version of your files, like save points in a game <span class="km" lang="km">រក្សាទុកគ្រប់កំណែនៃឯកសាររបស់អ្នក ដូចចំណុចរក្សាទុកក្នុងហ្គេម</span> | The Claude app needs it on Windows, and it sends your work to GitHub <span class="km" lang="km">កម្មវិធី Claude ត្រូវការវានៅលើ Windows ហើយវាផ្ញើការងាររបស់អ្នកទៅ GitHub</span> |
| **Claude app** | The AI app. Its **Code** tab writes code and runs commands for you <span class="km" lang="km">កម្មវិធី AI។ ផ្ទាំង **Code** របស់វាសរសេរកូដ និងដំណើរការពាក្យបញ្ជាជំនួសអ្នក</span> | It does the rest of this setup with you <span class="km" lang="km">វាធ្វើការរៀបចំផ្នែកផ្សេងទៀតជាមួយអ្នក</span> |
| **PowerShell** | A window where you type commands to your computer <span class="km" lang="km">ផ្ទាំងសម្រាប់វាយពាក្យបញ្ជាទៅកុំព្យូទ័ររបស់អ្នក</span> | Already on every Windows computer. You'll use it for a few steps yourself <span class="km" lang="km">មានស្រាប់លើកុំព្យូទ័រ Windows គ្រប់គ្រឿង។ អ្នកប្រើវាសម្រាប់ជំហានខ្លះដោយខ្លួនឯង</span> |
| **winget** | An "app store" for developer tools, used from PowerShell <span class="km" lang="km">"ហាងកម្មវិធី" សម្រាប់ឧបករណ៍អ្នកអភិវឌ្ឍន៍ ប្រើពី PowerShell</span> | Already on Windows 10 and 11. Makes installing everything else one command <span class="km" lang="km">មានស្រាប់លើ Windows 10 និង 11។ ធ្វើឱ្យការដំឡើងអ្វីៗផ្សេងទៀតត្រូវការពាក្យបញ្ជាតែមួយ</span> |
| **GitHub CLI** (`gh`) | Connects your computer to your GitHub account <span class="km" lang="km">ភ្ជាប់កុំព្យូទ័ររបស់អ្នកទៅគណនី GitHub</span> | Lets you push your website to GitHub without passwords <span class="km" lang="km">អនុញ្ញាតឱ្យអ្នកផ្ញើគេហទំព័រទៅ GitHub ដោយមិនបាច់វាយពាក្យសម្ងាត់</span> |
| **Node.js** | Runs JavaScript tools on your computer <span class="km" lang="km">ដំណើរការឧបករណ៍ JavaScript លើកុំព្យូទ័ររបស់អ្នក</span> | Astro (what builds your website) runs on Node <span class="km" lang="km">Astro (អ្វីដែលបង្កើតគេហទំព័ររបស់អ្នក) ដំណើរការលើ Node</span> |
| **VS Code** | A text editor for code <span class="km" lang="km">កម្មវិធីកែសម្រួលអត្ថបទសម្រាប់កូដ</span> | Handy for looking through all your files (optional, the Claude app shows changes too) <span class="km" lang="km">ងាយស្រួលសម្រាប់មើលឯកសារទាំងអស់ (មិនចាំបាច់ទេ ព្រោះកម្មវិធី Claude ក៏បង្ហាញការផ្លាស់ប្តូរដែរ)</span> |

## Step 1 · Install Git
km: ជំហានទី ១ · ដំឡើង Git

1. Go to **[git-scm.com/downloads/win](https://git-scm.com/downloads/win)** and download the installer.
   km: ចូលទៅកាន់ **git-scm.com/downloads/win** ហើយទាញយកកម្មវិធីដំឡើង។
2. Open it. It asks many questions: keep clicking **Next** to keep the default answers, then **Install**.
   km: បើកវា។ វាសួរសំណួរជាច្រើន៖ ចុច **Next** ជាបន្តបន្ទាប់ ដើម្បីរក្សាចម្លើយដើម បន្ទាប់មកចុច **Install**។
3. If Windows asks *"Do you want to allow this app to make changes?"*, click **Yes**.
   km: ប្រសិនបើ Windows សួរថា *"Do you want to allow this app to make changes?"* សូមចុច **Yes**។

## Step 2 · Install the Claude app
km: ជំហានទី ២ · ដំឡើងកម្មវិធី Claude

1. Go to **[claude.ai/download](https://claude.ai/download)** and download the Windows app.
   km: ចូលទៅកាន់ **claude.ai/download** ហើយទាញយកកម្មវិធីសម្រាប់ Windows។
2. Open the download to install it.
   km: បើកឯកសារដែលបានទាញយក ដើម្បីដំឡើងវា។
3. Open Claude and log in with your Claude account.
   km: បើក Claude ហើយចូលដោយប្រើគណនី Claude របស់អ្នក។

## Step 3 · Make a Projects folder
km: ជំហានទី ៣ · បង្កើតថត Projects

Open **File Explorer**, click the address bar at the top, type **%USERPROFILE%** and press **Enter**. This is your home folder. Make a new folder here called **Projects**. Your websites will live here.
km: បើក **File Explorer** ចុចលើរបារអាសយដ្ឋាននៅខាងលើ វាយ **%USERPROFILE%** ហើយចុច **Enter**។ នេះជាថតដើមរបស់អ្នក។ បង្កើតថតថ្មីមួយនៅទីនេះ ឈ្មោះ **Projects**។ គេហទំព័ររបស់អ្នកនឹងរក្សាទុកនៅទីនេះ។

## Step 4 · Ask Claude to set up the rest
km: ជំហានទី ៤ · ប្រាប់ Claude ឱ្យរៀបចំផ្នែកដែលនៅសល់

In the Claude app, open the **Code** tab, choose your **Projects** folder, and paste this message:
km: នៅក្នុងកម្មវិធី Claude បើកផ្ទាំង **Code** ជ្រើសរើសថត **Projects** របស់អ្នក ហើយបិទភ្ជាប់សារនេះ (ជាភាសាអង់គ្លេស ឬភាសាខ្មែរក៏បាន)៖

> Help me set up this Windows computer for web development. I'm a beginner. Please check what's already installed, then install whatever is missing from this list, one at a time, using winget where you can: the GitHub CLI, the latest LTS version of Node.js, and VS Code. Git for Windows is already installed.
> km: សូមជួយខ្ញុំរៀបចំកុំព្យូទ័រ Windows នេះសម្រាប់ការអភិវឌ្ឍគេហទំព័រ។ ខ្ញុំជាអ្នកទើបចាប់ផ្តើម។ សូមពិនិត្យមើលថាអ្វីខ្លះត្រូវបានដំឡើងរួចហើយ បន្ទាប់មកដំឡើងអ្វីដែលនៅខ្វះពីបញ្ជីនេះ ម្តងមួយៗ ដោយប្រើ winget នៅពេលអាចធ្វើបាន៖ GitHub CLI, កំណែ LTS ចុងក្រោយរបស់ Node.js និង VS Code។ Git for Windows ត្រូវបានដំឡើងរួចហើយ។
>
> Before each step, tell me in one sentence what it is and why I need it. If a step needs a Windows popup or an administrator window, give me the exact command to paste into PowerShell myself (and remind me how to open PowerShell), and wait for me to say "done". After each step, check that it worked. If a new tool isn't found right after installing it, tell me when I need to restart the Claude app.
> km: មុនជំហាននីមួយៗ សូមប្រាប់ខ្ញុំមួយប្រយោគថាវាជាអ្វី និងហេតុអ្វីខ្ញុំត្រូវការវា។ ប្រសិនបើជំហានណាមួយត្រូវការផ្ទាំងលោតឡើងរបស់ Windows ឬផ្ទាំង administrator សូមផ្តល់ពាក្យបញ្ជាពិតប្រាកដឱ្យខ្ញុំបិទភ្ជាប់ក្នុង PowerShell ដោយខ្លួនឯង (ហើយរំលឹកខ្ញុំពីរបៀបបើក PowerShell) រួចរង់ចាំខ្ញុំនិយាយថា "រួចរាល់"។ បន្ទាប់ពីជំហាននីមួយៗ សូមពិនិត្យថាវាដំណើរការ។ ប្រសិនបើរកមិនឃើញឧបករណ៍ថ្មីភ្លាមៗក្រោយដំឡើង សូមប្រាប់ខ្ញុំនៅពេលដែលខ្ញុំត្រូវបើកកម្មវិធី Claude ឡើងវិញ។
>
> At the end, help me log in to GitHub with `gh auth login`, set my git name and email, and show me a short summary of everything that's installed.
> km: នៅចុងបញ្ចប់ សូមជួយខ្ញុំចូល GitHub ដោយប្រើ `gh auth login` កំណត់ឈ្មោះ និងអ៊ីមែល git របស់ខ្ញុំ ហើយបង្ហាញសេចក្តីសង្ខេបខ្លីៗនៃអ្វីៗទាំងអស់ដែលបានដំឡើង។

Then follow along. Read what the AI says before you approve each command — that's how you learn what's happening.
km: បន្ទាប់មក ធ្វើតាម។ អានអ្វីដែល AI និយាយ មុនពេលអ្នកយល់ព្រមលើពាក្យបញ្ជានីមួយៗ — នោះជារបៀបដែលអ្នករៀនយល់ពីអ្វីដែលកំពុងកើតឡើង។

### Things that will happen
km: អ្វីដែលនឹងកើតឡើង

- **"Do you want to allow this app to make changes?"** Windows asks this when something is being installed. If it's what you're installing right now, click **Yes**.
  km: **"Do you want to allow this app to make changes?"** Windows សួរបែបនេះ នៅពេលកំពុងដំឡើងអ្វីមួយ។ ប្រសិនបើវាជាអ្វីដែលអ្នកកំពុងដំឡើងឥឡូវនេះ សូមចុច **Yes**។
- **A new tool is "not recognized".** Windows only finds new tools after a restart. Close the Claude app completely and open it again.
  km: **ឧបករណ៍ថ្មី "not recognized"។** Windows រកឃើញឧបករណ៍ថ្មី តែបន្ទាប់ពីបើកឡើងវិញប៉ុណ្ណោះ។ បិទកម្មវិធី Claude ទាំងស្រុង ហើយបើកវាម្តងទៀត។
- **"Running scripts is disabled on this system."** PowerShell blocks some tools, like `npm`, until you allow them. Paste the error to Claude and it will help you fix it.
  km: **"Running scripts is disabled on this system"។** PowerShell រារាំងឧបករណ៍ខ្លះ ដូចជា `npm` រហូតដល់អ្នកអនុញ្ញាត។ បិទភ្ជាប់កំហុសនោះទៅ Claude ហើយវានឹងជួយអ្នកជួសជុល។
- **Claude asks permission** before running commands. Read what it wants to run, then approve it.
  km: **Claude សុំការអនុញ្ញាត** មុនពេលដំណើរការពាក្យបញ្ជា។ អានអ្វីដែលវាចង់ដំណើរការ បន្ទាប់មកយល់ព្រម។
- **Something fails.** That's normal too. Copy the error, paste it to Claude, and say "this happened". This is the real skill.
  km: **មានអ្វីមួយបរាជ័យ។** នោះក៏ជារឿងធម្មតាដែរ។ ចម្លងកំហុស បិទភ្ជាប់ទៅ Claude ហើយនិយាយថា "រឿងនេះបានកើតឡើង"។ នេះជាជំនាញពិតប្រាកដ។

## Step 5 · Check it worked
km: ជំហានទី ៥ · ពិនិត្យថាវាដំណើរការ

Ask Claude: *"Check that git, node, npm, gh, and code all work, and that I'm logged in to GitHub."*
km: ប្រាប់ Claude៖ *"សូមពិនិត្យថា git, node, npm, gh និង code ដំណើរការទាំងអស់ ហើយខ្ញុំបានចូល GitHub រួចហើយ។"*

Or run it yourself in PowerShell:
km: ឬដំណើរការវាដោយខ្លួនឯងនៅក្នុង PowerShell៖

```powershell
git --version; node --version; npm --version; gh auth status; code --version
```

Every line should print a version number or "Logged in". You're ready.
km: បន្ទាត់នីមួយៗគួរតែបង្ហាញលេខកំណែ ឬ "Logged in"។ អ្នករួចរាល់ហើយ។

To open PowerShell: press the **Windows key**, type **PowerShell**, press **Enter**.
km: ដើម្បីបើក PowerShell៖ ចុច **គ្រាប់ចុច Windows** វាយ **PowerShell** ហើយចុច **Enter**។

## If the Claude app won't install or log in
km: ប្រសិនបើកម្មវិធី Claude មិនអាចដំឡើង ឬចូលបាន

Use [claude.ai](https://claude.ai) in your web browser instead. Paste the same Step 4 message, and add: *"Give me each command to paste into PowerShell myself."* It's slower, because you copy and paste every command, but it works the same way. Then try the app again.
km: ប្រើ claude.ai នៅក្នុងកម្មវិធីរុករកបណ្តាញជំនួសវិញ។ បិទភ្ជាប់សារដដែលពីជំហានទី ៤ ហើយបន្ថែម៖ *"សូមផ្តល់ពាក្យបញ្ជានីមួយៗឱ្យខ្ញុំបិទភ្ជាប់ក្នុង PowerShell ដោយខ្លួនឯង។"* វាយឺតជាង ព្រោះអ្នកត្រូវចម្លង និងបិទភ្ជាប់គ្រប់ពាក្យបញ្ជា ប៉ុន្តែវាដំណើរការដូចគ្នា។ បន្ទាប់មក សាកល្បងកម្មវិធីម្តងទៀត។
