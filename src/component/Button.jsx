import React from 'react'

const Button = ({ color, text, width, height, fontSize ,onClick }) => {
  const style = {
    backgroundColor: color,
    width: width,
    height: height,
    border: 'none',
    fontSize: fontSize,
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer'
  }
    return (
    <button style={style} onClick={onClick}>{text}</button>
  )
}

export default Button