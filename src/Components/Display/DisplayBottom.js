import React, {useContext} from 'react';
import OperationContext from '../../Contexts/OperationContext';

const DisplayBottom = () => {
  const {
    sum
  } = useContext(OperationContext)

  return (
    <div>
      {sum}
    </div>
  )
}

export default DisplayBottom;