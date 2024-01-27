import React from 'react';

const TypingArea = ({ myWord, textInput }) => {
  const renderColoredWord = () => {
    const minLength = Math.max(myWord.length, textInput.length);

    return Array.from({ length: minLength }, (_, i) => {
      const isSpace = myWord[i] === ' ';

      const style = {
        color: isSpace ? 'blue' : myWord[i] === textInput[i] ? 'red' : 'black',
        display: 'inline-block',
        marginRight: '1.3px', 
      };

      return (
        <span key={i} style={style}>
          {isSpace ? '\u00A0' : myWord[i]}
        </span>
      );
    });
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#333', 
  };

  const containerStyle = {
    marginBottom: '1rem',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="exampleFormControlTextarea1" style={labelStyle}>
        Typing Speed Test
      </label>
      <div>
        {renderColoredWord()}
      </div>
    </div>
  );
};

export default TypingArea;