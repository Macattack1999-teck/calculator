import React, { useState } from 'react';
import OperationContext from '../Contexts/OperationContext';

const OperationProvider = (props) => {
  const [operation, setOperation] = useState("");
  const [sum, setSum] = useState(null);

  const state = {
    operation,
    setOperation,
    sum,
    setSum
  }

  return (
    <OperationContext.Provider value={state}>
      {props.children}
    </OperationContext.Provider>
  )
}

export default OperationProvider;