import React from 'react';
import Button from './Button';

export default () => {
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
              <Button button={button} class={button} />
          )
        })
      }
    </div>
  )
}