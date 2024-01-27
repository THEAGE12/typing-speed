import React from 'react';
import Timer from './Timer';

const TimerSection = ({ isStarted, onTimerComplete, characters, incorrectCount, onHandleStart }) => {
  const sectionStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const timerStyle = {
    marginBottom: '1rem',
  };

  const countStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333', 
  };

  const incorrectStyle = {
    color: 'red',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50', 
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={sectionStyle}>
      {isStarted && <Timer isStarted={isStarted} onTimerComplete={onTimerComplete} style={timerStyle} />}
      <p style={countStyle}>
        {characters} characters, {Math.ceil(characters / 4.7)} words
        {isStarted && <span style={incorrectStyle}> Incorrect characters: {incorrectCount}</span>}
      </p>
      {!isStarted && <button onClick={onHandleStart} style={buttonStyle}>Start Typing Test</button>}
    </div>
  );
};

export default TimerSection;