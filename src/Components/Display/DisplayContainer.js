import React from 'react'
import DisplayBottom from './DisplayBottom'
import DisplayTop from './DisplayTop'

const DisplayContainer = () => {
  return (
    <div style={{
      width: "calc(100% - 40px)",
      background: "#000",
      height: "60px",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-end",
      padding: "0 20px"
    }}>
      <DisplayTop/>
      <DisplayBottom />
    </div>
  )
}

export default DisplayContainer;