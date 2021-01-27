import React, { useState } from 'react';
import OperationContext from '../Contexts/OperationContext';

const OperationProvider = (props) => {
  const [operation, setOperation] = useState('9+9/2');

  const state = {
    operation,
    setOperation
  }

  return (
    <OperationContext.Provider value={state}>
      {props.children}
    </OperationContext.Provider>
  )
}

export default OperationProvider;