import React from 'react'

const PrimaryBtn = (props) => {
  return (
  <button onClick={props.func}>{props.val}</button>
  )
}

export default PrimaryBtn