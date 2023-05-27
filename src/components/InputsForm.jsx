import React from 'react'
import styles from '../styles/inputs-form.module.css'

const InputsForm = (props) => {
  return (
    <div className={styles.form_container}>
        <form action="" className={styles.form}>
            <input className={styles.form_input} type="text" name='asunto' placeholder="Asunto" required/>
            <input className={styles.form_input} type="number" name='monto' placeholder="Monto" required/>
            <button type='submit' onClick={(e) => props.onClickFunction(e)}>+</button>
        </form>
    </div>
  )
}

export default InputsForm