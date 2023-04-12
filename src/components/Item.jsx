import React from 'react'

const Item = (props) => {
  return (
    <div data-index={props.i} id={props.id}>
        <h3>{props.asunto}</h3>
        <p>${props.monto}</p>
        <span>{props.time}</span>
        <button type='button' onClick={(e)=>props.delete(e)}>x</button>
    </div>
  )
}

export default Item