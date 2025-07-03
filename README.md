<<<<<<< HEAD
 AI Code Editor

An AI-powered code editor that allows users to generate, preview, and refine components and layouts using natural language prompts. Built with React, Monaco Editor, Sandpack, Tailwind CSS, and MUI.

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Monaco Editor](https://img.shields.io/badge/Monaco-Editor-lightgray?logo=visualstudiocode)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)
![MUI](https://img.shields.io/badge/MUI-Component-blue?logo=mui)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Features

- 💬 AI-Powered Code Generation from text prompts
- ✍️ Monaco Editor with syntax highlighting and live editing
- 👀 Live Preview using Sandpack (supports React JSX)
- 🎨 Style customization using Tailwind + MUI
- 🔄 Sidebar configuration for framework, size, color, etc.
- 🧱 Block-based layout with responsive UI

---




## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react)
- [Sandpack](https://sandpack.codesandbox.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://mui.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 🛠️ Installation

```bash
git clone https://github.com/YOUR_USERNAME/ai-code-editor.git
cd ai-code-editor
npm install
npm start
=======
AI Code Editor

This project is an AI-powered code editor that allows users to generate, edit, and refine code using natural language prompts. 

✨ Features
🧠 AI-Powered Code Generation
Accepts plain English prompts and converts them into working code (React, JavaScript, HTML, etc.).

✍️ Editor Interface with Editor.js
Rich, block-based content editing powered by Editor.js.

📦 Code Preview & Live Rendering
Generated code can be previewed in real-time (optional feature).

🔄 Edit / Refine via Prompts
Users can modify existing code by typing natural language instructions.

🧰 Tech Stack

Frontend -	React, Material UI, Editor.js
AI Backend- OpenRouter API (OpenAI/GPT models)
Hosting -	Vercel 

📁 Project Structure

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

⚙️ Setup Instructions
📁 1. Create the Project (if not already created)

npx create-react-app ai-code-editor
cd ai-code-editor

🧱 2. Install Dependencies

npm install @editorjs/editorjs @editorjs/code

Optional (if using Axios):
npm install axios

🔐 3. Configure Environment Variables
Create a .env file in the root directory:

REACT_APP_OPENROUTER_API_KEY=your-openrouter-api-key
You can get an API key from https://openrouter.ai

🧠 4. Integrate OpenRouter API
Create src/helper/openRouterApi.js and use fetch or axios to call the API with user prompts.

Example:

import axios from 'axios';

export async function fetchCodeFromPrompt(prompt) {
  const res = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'openai/gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful code assistant.' },
        { role: 'user', content: prompt }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data.choices[0].message.content;
}

✍️ 5. Integrate Editor.js
Editor setup example in Editor.jsx:

npm install @editorjs/editorjs @editorjs/code

import EditorJS from '@editorjs/editorjs';
import CodeTool from '@editorjs/code';

// Example initialization inside useEffect()
const editor = new EditorJS({
  holder: 'editorjs',
  tools: { code: CodeTool },
});

💻 6. Run the App

npm start
Open your browser and go to: http://localhost:3000
>>>>>>> 012b2970f47c97cc168ed5836d02f1c9500f5a32
