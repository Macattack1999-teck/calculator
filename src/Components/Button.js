import React, { useContext } from 'react';
import OperationContext from '../Contexts/OperationContext';

export default (props) => {
  const {
    setOperation,
    operation,
    setSum
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
    
    const handleSummingOperation = (operationValid, splitOperation) => {
      // base cases
      if (operationValid === false) {
        return;
      } else if (operationValid === true) {
        return setSum(eval(operation))
      }

      // make sure there is a full operation (ex: 6 + 6)
      if (splitOperation.length > 1) {
        // create a loop to get values between operators (ex: "23", "12", "9")
        for (let i = 0; i < splitOperation.length; i++) {
          // check if there is an empty value after an operator (ex: "23", "")
          if (splitOperation[i].length === 0) {
            handleSummingOperation(false, splitOperation)
            // check if theres a value after an operator and that the index matches splitOperation array length
          } else if (splitOperation[i].length > 0 && (i + 1) === splitOperation.length) {
            handleSummingOperation(true, splitOperation)
          }
        }
      } else {
        // there is not a full operation (ex: 6 +)
        handleSummingOperation(false, splitOperation)
      }
    }

    const handleAddingToOperation = () => {
      // split current operation by operators
      const splitOperation = operation.split("+").join(",").split("-").join(",").split("/").join("/").split("*").join(",").split(",")

      // Clears the operation
      if (props.button === "ac") {
        setOperation("")
      } else if (props.button === "=") {
        handleSummingOperation(null, splitOperation)
      } else {
        // check to see if input is a decimal point
        if (props.button === ".") {
          // check to see if there is a value in the operation
          if (splitOperation.length === 1 && splitOperation[0].length === 0) {
            setOperation(".")
            return;
          } else {
            // check to see if a decimal point already exists in the last element of splitOperation
            if (splitOperation[splitOperation.length - 1].includes(".")) {
              return;
            } else {
              // if it doesn't allow a decimal point to be added to the operation
              setOperation(operation + ".")
            }
          }
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

        // change input x into javascript multiplier (ex: x => *)
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