import React from 'react';

export default (props) => {
  const buttonName = props.button === "/" ? "slash"
     : props.button === "ac" ? "ac"
     : props.button === "-" ? "dash" 
     : props.button === "+" ? "plus" 
     : props.button === "=" ? "equals" 
     : props.button === "." ? "dot" 
     : props.button === "1" ? "one"
     : props.button === "2" ? "two"
     : props.button === "3" ? "three"
     : props.button === "4" ? "four"
     : props.button === "5" ? "five"
     : props.button === "6" ? "six"
     : props.button === "7" ? "seven"
     : props.button === "8" ? "eight"
     : props.button === "9" ? "nine"
     : props.button === "0" ? "zero"
     : props.button === "x" ? "times"
     : props.button

     const handleAddingToOperation = () => {
      console.log(props.button)
     }

  return (
    <div onClick={handleAddingToOperation} className={`button ${buttonName}`} style={{ gridArea: buttonName }}>
      {props.button}
    </div>
  )
}