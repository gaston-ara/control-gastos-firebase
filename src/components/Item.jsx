import React from 'react'
import IconDelete from '../icons/IconDelete'
import styles from '../styles/item.module.css'

const Item = (props) => {
  return (
    <div className={styles.item} data-index={props.i} id={props.id}>
        <h3>{props.asunto}</h3>
        <p>${props.monto}</p>
        <span>{props.time}</span>
        <button className={styles.btn_item} type='button' onClick={(e)=>props.delete(e)}><IconDelete/></button>
    </div>
  )
}

export default Item