AI Code Editor

A modern AI-powered code editor that allows users to generate, edit, and refine code using natural language prompts. Built with React, Editor.js, and OpenRouter API, this tool offers a seamless, interactive development experience with live preview support.

Features

💡 AI Code Generation — Converts natural language prompts into executable code (React, JavaScript, HTML, etc.)

📝 Block-Based Editing — Rich text/code editing powered by Editor.js

🔁 Prompt-Based Code Refinement — Update or modify existing code via follow-up prompts

🔍 Live Code Preview — Instantly render and test generated web code

⚡ Lightweight & Responsive UI — Built with Material UI for clean interface

Technology Stack

Core Technologies

React.js – Frontend framework

Material UI – Component library for styling

Editor.js – Block-style content editor

OpenRouter API – AI backend for prompt-to-code generation

JavaScript (ES6+) – Core scripting

Vercel – Deployment 

Folder Structure

src/
├── components/
│   └── ui/
│       ├── Editor.jsx
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       └── Sidebar2.jsx
├── helper/
│   └── openRouterApi.js
├── pages/
│   └── Home.jsx
├── App.js
├── index.js
├── App.css
├── index.css

Getting Started

1. Create Project

npx create-react-app ai-code-editor
cd ai-code-editor

2. Install Dependencies

npm install @editorjs/editorjs @editorjs/code

3. Set Environment Variable
Create a .env file in the root:


REACT_APP_OPENROUTER_API_KEY=your-openrouter-api-key

4. Run Locally

npm start
Open your browser at http://localhost:3000

Challenges Solved

Integrated AI with real-time, editable UI

Managed state sync between code and visual editor

Designed a seamless feedback loop between user prompts and generated code

Handled Editor.js integration within a dynamic React app

