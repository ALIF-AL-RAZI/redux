import React from 'react'

const Button = ({children, type, handler}) => {
    const style = 
    type === 'danger'?
    {backgroundColor: '#ff4500', color: '#fff'}
    :
    {backgroundColor: '#008080', color: '#fff'}
  return (
    <button style={style} onClick={handler}>{children}</button>
  )
}

export default Button