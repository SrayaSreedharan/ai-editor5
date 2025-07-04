#  AI Code Editor

An AI-powered code editing platform built with React that lets users generate, edit, and preview code components through natural language prompts. It combines Monaco Editor,  and MUI to provide a sleek, modern development experience.

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Monaco Editor](https://img.shields.io/badge/Monaco-Editor-black?logo=visualstudiocode)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38bdf8?logo=tailwindcss)
![MUI](https://img.shields.io/badge/MUI-Component-007FFF?logo=mui)
![MIT License](https://img.shields.io/badge/License-MIT-green)

---

## Features

- 💬 AI-Powered code generation from natural language
- ✍️ Monaco Editor with syntax highlighting
- 📦 Component structure with sidebar settings
- 📤 Code export & clipboard copy
- 🔄 Lazy loaded UI components for performance

---

##  Tech Stack

### Core Libraries

- **React** – Frontend framework
- **Monaco Editor** – Code editing experience (VS Code engine)
- **Material UI (MUI)** – Component styling and layout

### Utilities

- **React Toastify** – Toast notifications
- **React Suspense** – Lazy loading UI components
- **React Icons & MUI Icons** – Iconography

---

##  Project Structure

src/
├── components/
│ └── ui/
│ ├── Editor.jsx
│ ├── Sidebar.jsx
│ ├── Sidebar2.jsx
│ ├── Footer.jsx
│ └── Navbar.jsx
├── pages/
│ └── Dashboard.jsx
├── App.js
└── index.js

---

## Setup Instructions

**1. Clone the repo**

    git clone https://github.com/SrayaSreedharan/ai-editor5.git
    cd ai-editor5

**2. Install dependencies**

    npm install

**3. Start development server**

    npm start
    
Open http://localhost:3000 in your browser.

## Key Technical Highlights

**1. Monaco Editor**
   
  -Full-featured code editor inside your app
  
  -Supports syntax highlighting and code wrapping
  
  -Clipboard copy button with toast success feedback


**2. Lazy-Loaded Components**
   
  -Footer, Sidebar, and Sidebar2 are lazily imported
  
  -Improves first load performance using React.lazy and Suspense

**3. Custom Sidebar UI**

  -Input prompts for code generation
  
  -Styling options (framework, size, color, rounded)



