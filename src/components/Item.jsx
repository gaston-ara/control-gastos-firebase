import React from 'react'
import IconDelete from '../icons/IconDelete'
import styles from '../styles/item.module.css'

const Item = (props) => {
  return (
    <div className={styles.item} data-index={props.i} id={props.id}>
      <div className={styles.item_info}>
        <div className={styles.item_date}>{props.time}</div>
        <h3>{props.asunto}</h3>
        <p>${props.monto}</p>
      </div>
        <button className={styles.btn_item} type='button' onClick={(e)=>props.delete(e)}><IconDelete/></button>
    </div>
  )
}

export default Item