import React from 'react'
import List from './List'
import InputsForm from './InputsForm'
import styles from '../styles/out.module.css'
import { addEgresos, deleteEgreso, updateTotal, getTotal } from '../firebase/Firebase'

const Out = (props) => {
    const setEgresos = async (e) => {
        try {
            e.preventDefault()
            let item = {
                asunto: e.target.parentNode.children[0].value,
                monto: JSON.parse(e.target.parentNode.children[1].value),
                time: Date.now()
            }
            let id = props.total[0].id;
            let total = await getTotal()
            let newAmount = total.docs[0].data().monto - item.monto
            await addEgresos(item)
            await updateTotal(id, newAmount)
            //Reset form
            e.target.parentNode.children[0].value = "";
            e.target.parentNode.children[1].value = undefined;
            e.target.parentNode.children[0].focus();
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className={styles.out}>Egresos
        <InputsForm onClickFunction={setEgresos}/>
        <List arrayIn={props.egresosAll} toDelete={deleteEgreso} total={props.total} updateTotal={updateTotal} operation={"suma"}/>
    </div>

  )
}

export default Out