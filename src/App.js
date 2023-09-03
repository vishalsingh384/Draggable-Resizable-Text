import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import TextMovable from './components/auto';
import getImg from './services/api';

function App() {
  const [texts, setTexts] = useState([]);
  const [inputText, setInputText] = useState('');
  const bgImgRef = useRef(null);

  const addTextAndChangeBg = async () => {
    if (inputText) {
      setTexts([...texts, inputText]);
      setInputText('');
    }
  };

  useEffect(() => {
      const fetchImg=async()=>{
        const response=await getImg();
        return response;
      }

      const updateBg=async()=>{
        const imgUrl=await fetchImg();
        const bgImg=bgImgRef.current;
        bgImg.style.backgroundImage=`url(${imgUrl})`;
      }

      updateBg();
    }, [texts]);

  return (
    <div className="App" ref={bgImgRef}>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTextAndChangeBg}>Add Text</button>
      </div>
      <div className="text-boxes">
        {texts.map((text, index) => (
          <TextMovable key={index} text={text} />
        ))}
      </div>
    </div>
  );
}

export default App;
