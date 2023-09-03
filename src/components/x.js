import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextareaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextareaChange}
        style={{
          width: 'auto',
          height: 'auto',
          overflow: 'hidden',
        }}
      />
    </div>
  );
}

export default App;
