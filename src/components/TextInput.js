import React from 'react';

const TextInput = ({ isStarted, textInput, onInputChange }) => {
  const containerStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333', 
  };

  const inputStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: isStarted ? '#f5f5f5' : 'white', 
    color: '#333', 
    cursor: isStarted ? 'not-allowed' : 'text',
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="exampleFormControlInput1" style={labelStyle}>
        Write here
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder=""
        value={isStarted ? textInput : ""}
        disabled={!isStarted}
        onChange={(e) => onInputChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

export default TextInput;