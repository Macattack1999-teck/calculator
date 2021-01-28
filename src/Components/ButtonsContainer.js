import React from 'react';
import Button from './Button';

const ButtonsContainer = () => {
  const operationButtons = [
    "ac",
    "/",
    "x",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    "."
  ]
  return (
    <div className="button-container">
      {
        operationButtons.map((button) => {
          return (
              <Button key={button} button={button} class={button} />
          )
        })
      }
    </div>
  )
}

export default ButtonsContainer;