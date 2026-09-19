# Pratik Belkar — Portfolio

A responsive static portfolio for Pratik Belkar, a Flutter and MERN developer with Python, database, and AI skills. It features real work experience, selected projects, a 3D inspired hero, dark and light modes, and a WhatsApp contact form. No build step is needed to publish it.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## Update your content

- Edit `index.html` for your introduction, skills, project descriptions, links, email address, and phone number.
- Replace project screenshots in `assets/` and update their image paths in `index.html`.
- The latest résumé is at `assets/resume/pratik_flutter_resume.pdf`. Replace that file when you update it again; the download link will keep working.
- Edit `styles.css` for colors and layout; `script.js` controls the mobile menu, theme toggle, reveal effects, 3D motion, and WhatsApp message handoff.
- The skills section includes AI specialization and the tools Cursor, Codex, and Claude. Add a real AI project link and screenshot when you have one to feature.
- The contact form opens WhatsApp with a prefilled message to `+91 93079 23973`. Visitors review and send the message in WhatsApp. There is no form server or stored message history on this website.
- The website and résumé both use `belkarpratik2002@gmail.com`.

## Search and sharing

- `index.html` contains a descriptive page title, meta description, canonical URL, social sharing tags, and `Person` structured data.
- `assets/social-preview.png` is the social sharing image.
- `sitemap.xml` lists the portfolio URL. After publishing, submit `https://pratikbelkar.github.io/portfoli_web/sitemap.xml` in Google Search Console if you use it.
- Update the canonical, social image URL, structured data URL, and sitemap if you move the site to a custom domain.

## Publish with GitHub Pages

This folder is already connected to `https://github.com/pratikbelkar/portfoli_web.git` on the `main` branch. You do not need npm or a build command.

1. Open Terminal and run these commands one at a time:

   ```bash
   cd /Users/pratikbelkar/portfoli_web
   git add -A
   git commit -m "Update portfolio skills and design"
   git push origin main
   ```

2. Open [the repository](https://github.com/pratikbelkar/portfoli_web) in GitHub. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**. If these settings are already selected, leave them as they are.
4. Wait for the Pages deployment to finish. Check the repository's **Actions** tab if you want to follow its progress or diagnose a failure.
5. Open **https://pratikbelkar.github.io/portfoli_web/** and check the projects, WhatsApp contact form, theme toggle, résumé download, and mobile layout.

Later updates need only `git add -A`, `git commit -m "Describe your change"`, and `git push origin main`. GitHub Pages will publish the new commit from `main`.

Because all asset links are relative, the site works at this GitHub Pages repository URL. If you use a custom domain, add it under **Settings → Pages** and update the canonical and social URLs in `index.html` and `sitemap.xml`.
