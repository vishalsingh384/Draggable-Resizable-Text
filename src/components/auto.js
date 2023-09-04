import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

const TextMovable = ({ text, bg}) => {
  // console.log(bg);
  const [inputValue, setInputValue] = useState(text);
  const [textAreaClicked, setTextAreaClicked]=useState(false);

  const inputRef = useRef(null);
  const inputParentRef=useRef(null);
  const maxWidth = window.innerWidth-20; 
  const maxHeight=window.innerHeight-20;
  
  useEffect(() => {
    adjustInputSize();
  }, [inputValue]);

  useEffect(()=>{
    const handleClickOutsideTextArea=(e)=>{
      if(!inputRef.current.contains(e.target)){
        console.log('in');
        setTextAreaClicked(false);
      }
    }
    document.body.addEventListener('click', handleClickOutsideTextArea);

    return ()=>{
      document.body.removeEventListener('click', handleClickOutsideTextArea);
    }
  },[]);

  const handleClick=()=>{
    setTextAreaClicked(true);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const adjustInputSize = () => {
    if (inputRef.current) {
      console.log(inputRef.current);
      const input = inputRef.current;
      const inputParent=inputParentRef.current;

      input.style.width = 'auto'; 
      input.style.width = `${Math.min(inputValue.length*24+15, maxWidth)}px`; 
      input.style.height = 'auto'; 
      input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;

      inputParent.style.width = 'auto'; 
      inputParent.style.width = `${Math.min(inputValue.length*28+20, maxWidth)}px`;
      inputParent.style.height = 'auto'; 
      inputParent.style.height = `${Math.min(input.scrollHeight+20, maxHeight)}px`;
    }
  };

  return (
    <Draggable>
      <div
        className="text-box" ref={inputParentRef}
      >
        <textarea
         className={textAreaClicked?'border':''}
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleClick}
          rows={1}
          style={{
           maxWidth: `${maxWidth}px`
          }}
        />
      </div>
    </Draggable>
  );
};

export default TextMovable;
