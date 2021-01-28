import React, {useContext} from 'react';
import OperationContext from '../../Contexts/OperationContext';

export default () => {
  const {
    operation
  } = useContext(OperationContext)

  return (
    <div>
      {operation}
    </div>
  )
}