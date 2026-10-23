# Prathamesh Vijaywar — Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff0055?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A modern, high-performance, dark-themed personal portfolio showcasing full-stack engineering, AI/computer vision projects, and workflow automation.

[View Demo](https://github.com/Prathamesh9764) · [Report Bug](https://github.com/Prathamesh9764/issues) · [Request Feature](https://github.com/Prathamesh9764/issues)

</div>

---

## 👨‍💻 About Me

**Prathamesh Vijaywar**  
*Junior Developer at [Moodscope AI Pvt Ltd](https://moodscope.in) | Full-Stack Developer & AI Enthusiast*  
*B.Tech in Information Technology (7.84 CGPA, 2024) — YCCE, Nagpur*

Specializing in full-stack web applications, scalable backends, RESTful APIs, agentic AI workflows with n8n, and computer vision models (OpenCV, YOLOv8).

- 📍 **Location**: Nagpur, Maharashtra, India
- 💼 **LinkedIn**: [@prathamesh-vijaywar](https://www.linkedin.com/in/prathamesh-vijaywar-925885250/)
- 🐙 **GitHub**: [@Prathamesh9764](https://github.com/Prathamesh9764)
- ✉️ **Email**: [prathamesh.vijaywar@gmail.com](mailto:prathamesh.vijaywar@gmail.com)

---

## ✨ Features

- **🌓 Dark-Mode First UI**: Elegant slate/indigo dark theme with seamless light mode toggle.
- **💼 Experience & Education Timeline**:
  - Junior Developer (`May 2026 – Present`) — Moodscope AI Pvt Ltd
  - Software Developer Intern (`Nov 2025 – Apr 2026 · 6 mos`) — Moodscope AI Pvt Ltd
  - Freelance Full-Stack Developer (`2024 – Present`)
  - B.Tech in Information Technology (`2020 – 2024`) — YCCE Nagpur
  - Competency badges including Python, OpenCV, Nginx, and n8n (Agentic AI).
- **⚡ Categorized Technical Skills**: Interactive tabs covering Frontend, Backend, AI & Computer Vision, Languages, and Tools.
- **🤖 Agentic AI & Modern Services**:
  - Agentic AI & Automation using n8n workflows
  - Full-Stack Web Development (Next.js, React, Node.js)
  - AI & Computer Vision (OpenCV, YOLOv8, OCR)
  - UI/UX & High-Fidelity Prototyping (Figma)
- **🚀 Project Showcase & Filtering**: Tabbed gallery (All, Full Stack, AI & Vision, UI/UX) with modal details, tech badges, and GitHub links.
- **🛠️ Tools & Environments**: Authentic high-contrast vector badges for Git, GitHub, PostgreSQL, MySQL, MS SQL Server, MongoDB, n8n, VS Code, Postman, Figma, Tableau, and PyCharm.
- **📱 Responsive & Interactive**:
  - Smooth scroll progress bar (`ScrollProgress.jsx`)
  - Floating back-to-top button (`ScrollToTop.jsx`)
  - Accessible mobile slide-out navigation menu
  - Motion-driven cards and hover states powered by Framer Motion

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 15.1.4 (App Router), React 19, JavaScript (ES6+) |
| **Styling & Design** | Tailwind CSS 3.4.1, PostCSS, Custom Gradients |
| **Animations & Icons** | Framer Motion 12, Lucide React, Handcrafted Vector SVGs |
| **Databases & Tools** | PostgreSQL, MySQL, MS SQL Server, MongoDB, n8n, Git, Postman |
| **AI & Vision** | Python, OpenCV, YOLOv8, Streamlit |
| **Linting & Config** | ESLint 9 (Flat Config), Next.js Config |

---

## 📁 Project Structure

```text
my_portfolio/
├── app/
│   ├── components/
│   │   ├── About.jsx            # Bio, stats, education, and tools grid
│   │   ├── Contact.jsx          # Interactive contact form & channel cards
│   │   ├── Experience.jsx       # Career & education timeline with filters
│   │   ├── Footer.jsx           # Responsive footer and social links
│   │   ├── Header.jsx           # Hero banner, typing heading, and CTA buttons
│   │   ├── Navbar.jsx           # Sticky nav with theme toggle and mobile drawer
│   │   ├── ScrollProgress.jsx   # Top reading scroll progress bar
│   │   ├── ScrollToTop.jsx      # Smooth floating scroll-to-top button
│   │   ├── Services.jsx         # Service cards including Agentic AI (n8n)
│   │   ├── Skills.jsx           # Technical proficiency bars and tabs
│   │   ├── SocialIcons.jsx      # Reusable social media badges
│   │   └── Work.jsx             # Project showcase with category filters
│   ├── favicon.ico
│   ├── globals.css              # Global styles, dark mode utilities, animations
│   ├── layout.js                # Root HTML layout and font configurations
│   └── page.js                  # Main landing page assembling all sections
├── assets/
│   ├── assets.js                # Central repository for portfolio data and icons
│   ├── github.svg               # High-contrast GitHub Invertocat icon
│   ├── mssql.svg                # Microsoft SQL Server logo
│   ├── mysql.svg                # MySQL dolphin logo
│   ├── n8n.svg                  # Official n8n workflow node icon
│   ├── postgresql.svg           # Official PostgreSQL elephant vector icon
│   └── ... (images & assets)
├── public/                      # Static assets and project preview images
├── eslint.config.mjs            # Flat ESLint configuration for Next.js 15
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies and npm scripts
├── tailwind.config.mjs          # Tailwind CSS theme, font, and animation configs
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prathamesh9764/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server with Turbopack |
| `npm run build` | Builds optimized production static bundle |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs ESLint 9 to verify code standards |

---

## 🌐 Deployment

The application is pre-configured for seamless zero-config deployment on [Vercel](https://vercel.com):

1. Push your changes to GitHub.
2. Import your repository into Vercel.
3. Vercel automatically detects Next.js and deploys your site with global edge caching.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Designed & Developed with ❤️ by <strong>Prathamesh Vijaywar</strong>
</div>
