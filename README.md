# Princy Singh — Portfolio

## Set up the contact form

The contact form sends messages through Web3Forms. Your access key isn't
hardcoded — it's read from an environment variable so it stays out of your
source code.

1. Copy `.env.example` to a new file named `.env`
2. Open `.env` and replace the placeholder with your real Web3Forms access
   key, so it looks like:
   ```
   VITE_WEB3FORMS_KEY=your-real-key-here
   ```
3. Restart `npm run dev` if it was already running (Vite only reads `.env`
   on startup)

`.env` is already listed in `.gitignore`, so it won't be committed if you
push this project to GitHub.

## Run it

```
npm install
npm run dev
```

Open the printed local URL in your browser.

## Change the profile picture

Replace `public/profile.jpg` with your own image, keeping the same file
name. No code changes needed.

## Update the resume

Replace `public/resume.pdf` with your own PDF, keeping the same file name.
The "Download Resume" button will serve the new file automatically.

## Update projects, skills, contact info, etc.

Everything text-based lives in one file: `src/data/siteData.js`.
Open it and edit the arrays/objects directly — add, remove, or change
projects, skills, services, experience items, or contact details.

## Project structure

```
public/
  profile.jpg        your photo
  resume.pdf          your resume
src/
  data/
    siteData.js        all editable content
    iconMap.js          icon lookup used by About/Skills
  hooks/
    useTypewriter.js    hero title typing animation
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Services.jsx
    Projects.jsx
    Experience.jsx
    WhyHireMe.jsx
    Contact.jsx
    Footer.jsx
  App.jsx               composes all sections
  App.css                all component styling
  index.css              resets + theme color variables
```

## Theme colors

Colors are defined as CSS variables at the top of `src/index.css`
(`--cyan`, `--blue`, `--bg`, `--card`, etc). Change them there to
re-theme the whole site in one place.
