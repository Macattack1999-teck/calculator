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
      // Clears the operation
      if (props.button === "ac") {
        setOperation("")
      } else if (props.button === "=") {
        // make sure there is a full operation to be done
        if (operation.length > 0) {
          console.log(operation)
        }
      } else {
        // make sure there isn't mutliple decimal points on a number
        if (props.button === ".") {
          console.log(props.button)
        }

        // check to see if input is a javascript operator
        if (props.button === "+" || props.button === "-" || props.button === "x" || props.button === '/') {
          // check to see if input operator isn't already the last operator attached to operation
          // TODO REFACTOR CONDITIONAL REVERSE
          if (props.button === operation[operation.length - 1]) {
            return
            // check to see if passed input operator is different than current operations last operator if it is different change it to new operator
          } else if (operation[operation.length - 1] === "+" || operation[operation.length - 1] === "-" || operation[operation.length - 1] === "x" || operation[operation.length - 1] === "/") {
            const slicedOperation = operation.slice(0, -1)
            const operator = props.button === "x" ? "*" : props.button
            const completeOperation = slicedOperation + operator
            return setOperation(completeOperation)
          }
        }

        // change input x into javascript multiplier *
        if (props.button === "x") {
          setOperation(operation + "*")
        } else {
          // add input to operation
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