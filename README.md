
Ai code editor

This project is an AI- code editor that allows users to generate, edit, and refine code through natural language prompts.


 Features

🧠 AI-Powered Code Generation

Accepts plain English prompts and converts them into working code (React, JavaScript, HTML, etc.)


✍️ Editor Interface with Editor.js

Rich, block-based content editing.

📦 Code Preview & Live Rendering

Display generated code in a live preview pane (for web code).

🔄 Edit / Refine via Prompts

Users can modify existing code by typing instructions 

Tech Stack

Frontend - React, Material ui, Editor.js
AI Backend - OpenRouter API (OpenAI/GPT models)
Hosting  -	Vercel / Netlify (optional)


project Structure

src/
├── components/
│   └── ui/
│       ├── Editor.jsx
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       └── Sidebar2.jsx
│
├── helper/
│   └── openRouterApi.js
│
├── pages/
│   └── Home.jsx
│
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── setupTests.js



Setup Instructions
📁1. Create Your Project (if not already created)

npx create-react-app ai-code-editor
cd ai-code-editor

🧱 2. Install Dependencies

npm install @editorjs/editorjs @editorjs/code


🔐 3. Configure Environment Variables
Create a .env file in the root folder:

REACT_APP_OPENROUTER_API_KEY=your-openrouter-api-key

4. Integrate OpenRouter API

If you're using fetch or axios in your code generation logic, 

🧱 5. Integrate Editor.js

npm install --save @editorjs/editorjs @editorjs/code

💻 6. Run the App

npm start

Access the application Open http://localhost:3000 in your browser

