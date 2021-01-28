import React, {useContext} from 'react';
import OperationContext from '../../Contexts/OperationContext';

export default () => {
  const {
    operation,
    sum
  } = useContext(OperationContext)

  return (
    <div style={{ display: "flex" }}>
      <div>
        {operation}
      </div>

      {
        sum ? (
          <div style={{ display: "flex" }}>
            <div>
              =
            </div>

            <div>
              {sum}
            </div>
          </div>
        ) : null
      }
    </div>
  )
}