import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Editor from './components/Editor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [generatedCode, setGeneratedCode] = useState('');
  const [styleOptions, setStyleOptions] = useState({
    framework: 'Tailwind CSS',
    colorScheme: 'blue',
    size: 'medium',
    rounded: 'medium',
  });

  return (
    <>
    <div style={{ display: 'flex', gap: '16px' }}>
     {/* props */}
      <Sidebar setGeneratedCode={setGeneratedCode} styleOptions={styleOptions} />
      <Sidebar2 styleOptions={styleOptions} setStyleOptions={setStyleOptions} />
      <Editor generatedCode={generatedCode} />
    </div>
    <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
