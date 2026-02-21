<div id="top">

<!-- HEADER STYLE: COMPACT -->
<img src="readmeai/assets/logos/purple.svg" width="30%" align="left" style="margin-right: 15px">

# ELDERLADDER
<em>Empower Connections, Elevate Experiences, Inspire Engagement</em>

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat-square&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">

<br clear="left"/>

## ☀️ Table of Contents

<details>
<summary>Table of Contents</summary>

- [🌞 Overview](#-overview)
- [🔥 Features](#-features)
- [🧭 Pages](#-pages)
- [🌅 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [🌟 Prerequisites](#-prerequisites)
  - [⚡ Installation](#-installation)
  - [🔆 Usage](#-usage)
  - [🌠 Testing](#-testing)
- [🧩 Scripts](#-scripts)
- [🔧 Configuration](#-configuration)
- [🌻 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

</details>

---

## 🌞 Overview

ElderLadder.live is a web platform designed to help **young adults meaningfully connect with older adults** through guided interactions, curated stories, and simple, actionable task cards.  
Instead of leaving conversations to chance, ElderLadder provides lightweight prompts and content experiences that make it easier to start, sustain, and deepen cross-generational engagement.

**Why ElderLadder?**

- **🤝 Structured Intergenerational Engagement:** Turns “I don’t know what to talk about” into clear, guided interaction steps.
- **🧭 Content + Action in One Flow:** Combines browsing posts/stories with interactive task cards that encourage real-world connection.
- **🖥️ Smooth User Experience:** SPA with client-side routing for fast navigation across Home / Posts / Cards.
- **🎨 Modern UI System:** Tailwind CSS + PostCSS + Autoprefixer for consistent, responsive styling and cross-browser support.
- **🔌 Backend-Ready Integration:** Axios-based request layer to connect with APIs (e.g., fetching personalized cards or curated content).
- **📊 Performance-Friendly:** Web-vitals instrumentation included for measuring and improving UX performance.

---

## 🔥 Features

| Area | What it covers |
| --- | --- |
| ⚙️ Architecture | SPA, React, client-side routing |
| 🎨 UI & Styling | Tailwind CSS, custom CSS, animations (`animations.css`) |
| 🔌 Integrations | Axios for API calls, React Router for navigation |
| 🧪 Testing | Jest + React Testing Library (CRA default setup) |
| 📦 Tooling | PostCSS + Autoprefixer, npm scripts |

---

## 🧭 Pages

- **Home (`HomePage.js`)**  
  Landing experience with a guided flow and rotating background visuals.

- **Posts (`PostsPage.js`)**  
  Carousel-style browsing experience for posts/content.

- **Cards (`CardsPage.js`)**  
  Interactive survey (e.g., gender / difficulty) that fetches and displays task card content, with loading + modal feedback states.

---

## 🌅 Project Structure

```sh
ElderLadder/
  ├── package.json
  ├── package-lock.json
  ├── postcss.config.js
  ├── tailwind.config.js
  ├── public/
  │   ├── index.html
  │   ├── manifest.json
  │   └── robots.txt
  └── src/
      ├── App.js
      ├── App.css
      ├── index.js
      ├── index.css
      ├── HomePage.js
      ├── PostsPage.js
      ├── CardsPage.js
      ├── animations.css
      ├── reportWebVitals.js
      ├── setupTests.js
      └── images/
🚀 Getting Started
🌟 Prerequisites
Node.js (LTS recommended)
npm (comes with Node.js)
⚡ Installation
git clone <your-repo-url>
cd ElderLadder
npm install
🔆 Usage
npm start
Then open: http://localhost:3000
🌠 Testing
npm test
🧩 Scripts
Common scripts (from Create React App):
npm start — start local dev server
npm run build — build for production
npm test — run tests in watch mode
npm run eject — eject CRA config (usually not recommended unless necessary)
🔧 Configuration
Environment Variables (Optional)
If you connect this frontend to a backend API, you can use CRA-style env vars:
Create a .env file in the project root:
REACT_APP_API_BASE_URL=http://localhost:8080
And in code (example):
const baseURL = process.env.REACT_APP_API_BASE_URL;
Notes:
CRA only exposes variables prefixed with REACT_APP_.
If you don't need a backend yet, you can skip this section.
🌻 Roadmap
Improve API integration patterns (centralized Axios client, error handling, retries)
Add better loading/error UI states and empty states across pages
Expand test coverage (page-level interaction tests + snapshot tests where useful)
Optional: deployment setup (Netlify/Vercel) and CI checks (lint/test on PR)
🤝 Contributing
Fork the repository
Create a new branch: git checkout -b feature/<name>
Commit changes: git commit -m "Add <feature>"
Push: git push origin feature/<name>
Open a Pull Request