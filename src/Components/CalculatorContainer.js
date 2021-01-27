import React from 'react';
import ButtonsContainer from './ButtonsContainer';
import DisplayContainer from './Display/DisplayContainer';

export default () => {
  return (
    <div className="calculator-container" style={{
      background: "#1B1B1B",
      height: "fit-content",
      width: "fit-content",
      minHeight: "60vh",
      minWidth: "40vw",
      boxShadow: "0 0 12px 7px rgba(0, 0, 0, 0.5)",
      borderRadius: "20px"
    }}>
      <DisplayContainer />
      <ButtonsContainer />
    </div>
  )
}