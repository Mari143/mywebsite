# 🚀 Ammar Ali — Portfolio Website: Deployment & Editing Guide
> Written for someone with zero coding experience. Every step is numbered. Follow them in order.

---

## PART 1 — Getting the site live on Netlify (15 minutes, free)

### Step 1 — Create your site folder
On your computer, create a new folder. Name it exactly: **ammar-portfolio**

### Step 2 — Put the files in the right places

Inside **ammar-portfolio**, you need this structure:

```
ammar-portfolio/
├── index.html              ← The main website file (the one you downloaded)
└── assets/
    └── images/
        ├── headshot.jpg    ← Your professional headshot (you add this)
        ├── lambert-logo.webp     ← Optional company logos
        ├── angloco-logo.jpg
        └── tesla-sign.webp
```

**At minimum, just put `index.html` in the folder — the site will work perfectly without images.**

### Step 3 — Add your headshot (optional but recommended)
1. Save your headshot photo as **headshot.jpg**
2. Create a folder called **assets** inside ammar-portfolio
3. Inside **assets**, create a folder called **images**
4. Put **headshot.jpg** inside **assets/images/**
5. Open **index.html** in Notepad (right-click → Open with → Notepad)
6. Press Ctrl+F and search for: `HOW TO ADD YOUR HEADSHOT`
7. Follow the exact instructions in those code comments

### Step 4 — Create a free Netlify account
1. Go to: **https://app.netlify.com/signup**
2. Sign up with your GitHub or email — it's completely free
3. Verify your email if asked

### Step 5 — Deploy your site
1. Log into Netlify: **https://app.netlify.com**
2. On your dashboard, find the box that says **"Drag and drop your site folder here"** (it's at the bottom of the page under "Sites")
3. Drag your entire **ammar-portfolio** folder into that box
4. Wait about 10 seconds...
5. ✅ **Your site is live!** Netlify will give you a URL like `https://amazing-torvalds-123abc.netlify.app`

### Step 6 — Get a custom URL (optional but looks professional)
Instead of the random URL, you can set a custom subdomain:
1. Click your new site in Netlify
2. Click **"Site settings"** → **"Domain management"**
3. Click **"Edit site name"**
4. Type something like: **ammar-ali-sales** (this makes it `ammar-ali-sales.netlify.app`)
5. Save — it updates instantly!

If you want your own domain (like **ammarali.co.uk**), you can buy one from GoDaddy or Namecheap for ~£10/year and connect it in the same Domain Management section.

---

## PART 2 — Editing your website (the easy way)

All editable content is marked with comments like:
```
<!-- EDIT YOUR NAME HERE ↓ -->
```

### How to edit the file
1. Right-click **index.html** → **Open with** → **Notepad** (or Notepad++, which is free and better)
2. Press **Ctrl + F** to search
3. Search for the thing you want to change (e.g. "your.email@here.com")
4. Make your change
5. Press **Ctrl + S** to save
6. Re-drag the folder to Netlify to update the live site

---

## PART 3 — Specific things to change

### 🔴 URGENT: Add your email address
Search for: `your.email@here.com`
Replace with your real email. It appears twice (hero + contact section).

### Change your LinkedIn URL
Search for: `ammarali143`
Yours is already correct! Your LinkedIn is: `https://www.linkedin.com/in/ammarali143/`
(No change needed here)

### Change the cycling taglines in the hero
Search for: `EDIT YOUR "TRANSLATIONS" HERE`
You'll see a list like this:
```javascript
const phrases = [
  "PLCs into Purchase Orders.",
  "Schematics into Signed Contracts.",
  ...
];
```
Just change the text inside the quotes. Add new lines or delete ones you don't like.
**Keep the format exact**: each line must end with `",` (comma inside the quotes then a comma after)

### Change your job descriptions
Search for the job title, e.g. `Sales Engineer at Mpac Lambert`
Or search for: `EDIT THE DETAILS BELOW FOR THIS JOB`
Then edit the `<p>` paragraph below it.

### Change your colours
At the very top of the file, search for `:root {`
You'll see all the colour codes:
```css
:root {
  --teal:   #269F94;   ← Main teal (change this for a different brand colour)
  --deep:   #125857;   ← Darker teal
  --amber:  #E8A320;   ← Gold accent (the highlights and CTA button)
  --ink:    #0B1A1A;   ← Dark background colour
```
Change the hex code (e.g. `#269F94`) to any colour you like.
Use **https://coolors.co** to find nice hex codes.

### Add your actual headshot photo
Search for: `HOW TO ADD YOUR HEADSHOT`
Follow the exact instructions written in the code comment there.

---

## PART 4 — Updating the live site after changes

Every time you edit and save **index.html**, you need to re-upload to Netlify:
1. Go back to **https://app.netlify.com**
2. Click your site
3. Click **"Deploys"** in the left menu
4. Drag your updated **ammar-portfolio** folder into the drag-drop area again
5. Wait 10 seconds — your live site updates!

---

## PART 5 — Frequently asked questions

**Q: Will people be able to find my site on Google?**
A: Not automatically — Google needs time to discover new sites. To speed this up, share your URL on LinkedIn and your CV. You can also submit your URL to Google Search Console (google it — it's free).

**Q: Can I add a profile picture later?**
A: Yes! Follow the "HOW TO ADD YOUR HEADSHOT" instructions, save, and re-upload to Netlify.

**Q: Can I add more jobs or skills?**
A: Yes. Open the file in Notepad, find an existing experience card, copy the whole block (from `<div class="reveal relative mb-10">` to its closing `</div>`), paste it below, and change the text.

**Q: The site looks broken / I made a mistake**
A: Don't panic! Close Notepad without saving (Ctrl+Z to undo, or just close and say "don't save"). Your original file is unchanged.

**Q: How do I add a downloadable CV?**
1. Save your CV as **cv.pdf**
2. Put it in your **assets/** folder
3. Find the contact section CTA buttons in the HTML
4. Add this line after the email button:
   `<a href="assets/cv.pdf" download class="btn-outline">Download CV</a>`

---

## Quick reference: where to find key sections

| What you want to edit          | Search in Notepad for...                    |
|--------------------------------|---------------------------------------------|
| Your name                      | `Hi. I'm`                                   |
| Your email address             | `your.email@here.com`                       |
| Cycling hero taglines          | `EDIT YOUR "TRANSLATIONS" HERE`             |
| Hero bio paragraph             | `EDIT YOUR BIO SUMMARY HERE`                |
| About Me paragraphs            | `EDIT YOUR ABOUT PARAGRAPHS HERE`           |
| Stats (3+, 5+, BEng)          | `EDIT YOUR STATS HERE`                      |
| Job descriptions               | `EDIT THE DETAILS BELOW FOR THIS JOB`       |
| Skills in each card            | `EDIT YOUR SKILL CATEGORIES BELOW`          |
| Contact section headline       | `EDIT YOUR CONTACT HEADLINE HERE`           |
| Headshot photo                 | `HOW TO ADD YOUR HEADSHOT`                  |
| Brand colours                  | `:root {`                                   |

---

*Built with HTML + Tailwind CSS. Hosted free on Netlify. No code knowledge required to maintain.*
