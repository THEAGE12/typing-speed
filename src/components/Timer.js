import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ onTimerComplete, isStarted }) => {
  const [seconds, setSeconds] = useState(60);
  const intervalRef = useRef();

  useEffect(() => {
    if (isStarted) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isStarted]);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalRef.current);
      onTimerComplete(0);
    }
  }, [seconds, onTimerComplete]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div style={timerContainer}>
      <div style={timer}>
        {formatTime(seconds)}
      </div>
    </div>
  );
};

const timerContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px', 
};

const timer = {
  fontSize: '2em',
  backgroundColor: '#FFB6C1',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default Timer;