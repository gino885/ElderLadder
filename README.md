<div id="top">

<img src="https://raw.githubusercontent.com/khuyentran1401/readme-ai/main/readmeai/assets/logos/purple.svg" width="30%" align="left" style="margin-right: 15px">

# ELDERLADDER
<em>Empower Connections, Elevate Experiences, Inspire Engagement</em>

<em>Built with the tools and technologies:</em>

<p>
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat-square&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</p>

<br clear="left"/>

## ☀️ Table of Contents

<details>
<summary>Click to expand</summary>

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

**ElderLadder.live** is a web platform designed to help **young adults meaningfully connect with older adults** through guided interactions, curated stories, and simple, actionable task cards.  

Instead of leaving conversations to chance, ElderLadder provides lightweight prompts and content experiences that make it easier to start, sustain, and deepen cross-generational engagement.

---

## 🔥 Features

| Area | What it covers |
| --- | --- |
| **⚙️ Architecture** | SPA, React, client-side routing |
| **🎨 UI & Styling** | Tailwind CSS, custom CSS, animations (`animations.css`) |
| **🔌 Integrations** | Axios for API calls, React Router for navigation |
| **🧪 Testing** | Jest + React Testing Library (CRA default setup) |
| **📦 Tooling** | PostCSS + Autoprefixer, npm scripts |

---

## 🧭 Pages

* **Home (`HomePage.js`)**: Landing experience with a guided flow and rotating background visuals.
* **Posts (`PostsPage.js`)**: Carousel-style browsing experience for posts and stories.
* **Cards (`CardsPage.js`)**: Interactive survey (e.g., gender/difficulty) that fetches and displays task card content with modal feedback.

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
```
🚀 Getting Started
🌟 Prerequisites

Node.js: LTS version recommended

npm: Comes bundled with Node.js

⚡ Installation

Clone the repository:

Bash
git clone <your-repo-url>
Navigate to the project directory:

Bash
cd ElderLadder
Install dependencies:

Bash
npm install
🔆 Usage

Start the local development server:

Bash
npm start
The app will be available at http://localhost:3000.

🌠 Testing

Run the test suite in watch mode:

Bash
npm test
🧩 Scripts
Script	Description
npm start	Runs the app in development mode.
npm run build	Builds the app for production to the build folder.
npm test	Launches the test runner.
npm run eject	Note: This is a one-way operation. Only use if you need to customize CRA build tools.
🔧 Configuration
Environment Variables

If connecting to a backend, create a .env file in the root directory:

Code snippet
REACT_APP_API_BASE_URL=http://localhost:8080
In your code, access it via:

JavaScript
const baseURL = process.env.REACT_APP_API_BASE_URL;
Note: Create React App (CRA) only exposes variables prefixed with REACT_APP_.

🌻 Roadmap
[ ] Improve API integration patterns (centralized Axios client, error handling).

[ ] Add better loading/error UI states across all pages.

[ ] Expand test coverage (page-level interaction and snapshot tests).

[ ] Deployment setup (Netlify/Vercel) and CI/CD pipeline.

🤝 Contributing
Fork the repository.

Create a new branch: git checkout -b feature/<name>.

Commit your changes: git commit -m "Add <feature>".

Push to the branch: git push origin feature/<name>.

Open a Pull Request.
