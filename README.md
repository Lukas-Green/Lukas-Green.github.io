# lukasdgreen.com

Personal site for Lukas Green — AI Systems Designer.

Hosted on GitHub Pages. Custom domain: `lukasdgreen.com`.

## Setup checklist

- [ ] Create repo named `Lukas-Green.github.io` on GitHub
- [ ] Push this folder to that repo
- [ ] In repo Settings → Pages → set source to `main` branch, root `/`
- [ ] Point `lukasdgreen.com` DNS to GitHub Pages (see below)
- [ ] Register at [formspree.io](https://formspree.io) and replace `REPLACE_WITH_YOUR_FORMSPREE_ID` in `index.html`
- [ ] Set up `lukas@lukasdgreen.com` via ImprovMX or Zoho Mail

## DNS setup (via your domain registrar)

Add these A records pointing to GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

And a CNAME record:
```
www  →  Lukas-Green.github.io
```
