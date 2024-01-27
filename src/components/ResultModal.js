import React from 'react';
import Modal from 'react-modal';

const ResultModal = ({ isOpen, closeModal, characters, incorrectCount, myWord }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Time out"
      style={{
        content: {
          height: '250px',
          width: '450px',
          margin: 'auto',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
          background: '#FFB6C1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Time's up!</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
        Accuracy: {(characters / (characters + incorrectCount)) * 100 || 0}%
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
        Words/min: {Math.ceil(characters / 4.7)}
      </p>
      <button
        onClick={closeModal}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Close Modal
      </button>
    </Modal>
  );
};

export default ResultModal;