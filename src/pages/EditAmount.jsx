import React from 'react'
import IconSend from '../icons/IconSend';
import styles from '../styles/edit-amount.module.css'
import { useNavigate } from "react-router-dom";
import { updateTotal } from '../firebase/Firebase';
import { AppContext } from '../context/ContextProvider';

const EditAmount = () => {
    const { total } = AppContext()
    const navigate = useNavigate();
    const update = async (e) => {
        e.preventDefault();
        let valueToUpdate = JSON.parse(e.target.parentNode.children[0].value);
        let idToUpdate = total[0].id
        await updateTotal(idToUpdate, valueToUpdate)
        navigate("/");
    }
    return (
        <div className={styles.container}>
        
        <span className={styles.btn_close}>
            <button onClick={() => navigate("/")}>x</button>
        </span>
            <h1>Monto actual: {total? `$${total[0].monto}` : "..."}</h1>
            <form action="" className={styles.form_edit_amount}>
                <input className={styles.input_edit_amount} type="number" placeholder='Nuevo monto total' />
                <button className={styles.btn_edit_amount} type='submit' onClick={(e) => update(e)}><IconSend /></button>
            </form>
        </div>
    )
}

export default EditAmount