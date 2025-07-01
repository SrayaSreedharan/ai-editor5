import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

const App = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setGeneratedCode={setGeneratedCode} />
      <Editor generatedCode={generatedCode} />
    </div>
  );
};

export default App;
