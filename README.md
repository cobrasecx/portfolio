# 🐍 Alberto Ayza | Portfolio

Personal portfolio of a cybersecurity student and junior ethical hacking researcher, with a background in full-stack web development.

🔗 **Live site:** https://cobrasecx.github.io/portfolio/

## ✨ Sections

- 🏠 **Home** and 👤 **About**
- 🎓 **Certifications**
- 📰 **News**: achievements, labs and projects in progress
- ✍️ **Write-ups**: machine and room walkthroughs hosted on GitHub
- 💜 **Donations**: crypto addresses with a copy button
- ✉️ **Contact**

## 🛠️ Tech stack

- React and React Router
- Vite
- Bootstrap and Bootstrap Icons
- ESLint and Prettier

## 🚀 Getting started

```bash
yarn            # install dependencies
yarn dev        # start the dev server
yarn build      # production build (output in dist/)
yarn lint       # check the code with ESLint
yarn format     # format the code with Prettier
```

## 🧩 Project structure

```
src/
├── components/   # reusable pieces (NavBar, Modal...)
├── pages/        # one folder per page
├── styles/       # CSS files
└── index/        # central export of the pages
```

News, write-ups and donation addresses are plain arrays at the top of their page files, so adding an entry means adding one object.

## 🌐 Deployment

Published on GitHub Pages (see `deploy.sh`).
