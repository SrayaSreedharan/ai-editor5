import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Editor from './components/Editor';

function App() {
  const [generatedCode, setGeneratedCode] = useState('');
  const [styleOptions, setStyleOptions] = useState({
    framework: 'Tailwind CSS',
    colorScheme: 'blue',
    size: 'medium',
    rounded: 'medium',
  });

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {/* ✅ Make sure these props are passed */}
      <Sidebar setGeneratedCode={setGeneratedCode} styleOptions={styleOptions} />
      <Sidebar2 styleOptions={styleOptions} setStyleOptions={setStyleOptions} />
      <Editor generatedCode={generatedCode} />
    </div>
  );
}

export default App;
