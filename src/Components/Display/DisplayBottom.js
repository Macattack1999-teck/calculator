import React, {useContext} from 'react';
import OperationContext from '../../Contexts/OperationContext';

export default () => {
  const {
    sum
  } = useContext(OperationContext)

  return (
    <div>
      {sum}
    </div>
  )
}