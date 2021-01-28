import React, { useContext } from 'react';
import OperationContext from '../Contexts/OperationContext';

export default (props) => {
  const {
    setOperation,
    operation
  } = useContext(OperationContext);

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
      if (props.button === "ac") {
        setOperation("")
      } else if (props.button === "=") {
        if (operation.length > 0) {
          
        }
      } else {
        if (props.button === "+" || props.button === "-" || props.button === "x" || props.button === '/') {
          if (props.button === operation[operation.length - 1]) {
            return
          } else if (operation[operation.length - 1] === "+" || operation[operation.length - 1] === "-" || operation[operation.length - 1] === "x" || operation[operation.length - 1] === "/") {
            const slicedOperation = operation.slice(0, -1)
            const operator = props.button === "x" ? "*" : props.button
            const completeOperation = slicedOperation + operator
            return setOperation(completeOperation)
          }
        }

        if (props.button === "x") {
          setOperation(operation + "*")
        } else {
          setOperation(operation + props.button)
        }
      }
    }

  return (
    <div onClick={handleAddingToOperation} className={`button ${buttonName}`} style={{ gridArea: buttonName }}>
      {props.button}
    </div>
  )
}