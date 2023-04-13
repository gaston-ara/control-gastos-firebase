import React from 'react'
import List from './List'
import InputsForm from './InputsForm'
import styles from '../styles/in.module.css'
import { addIngresos, deleteIngreso, updateTotal, getTotal} from '../firebase/Firebase'

const In = (props) => {
    const setIngresos = async (e) => {
        try {
            e.preventDefault()
            let item = {
                asunto: e.target.parentNode.children[0].value,
                monto: JSON.parse(e.target.parentNode.children[1].value),
                time: Date.now()
            }
            let id = props.total[0].id;
            let total = await getTotal()
            let newAmount = total.docs[0].data().monto + item.monto
            await addIngresos(item)
            await updateTotal(id, newAmount)
            //Reset Form
            e.target.parentNode.children[0].value = "";
            e.target.parentNode.children[1].value = undefined;
            e.target.parentNode.children[0].focus()
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className={styles.in}>
        Ingresos
        <InputsForm onClickFunction={setIngresos}/>
        <List arrayIn={props.ingresosAll} toDelete={deleteIngreso} total={props.total} updateTotal={updateTotal} operation={"resta"}/>
    </div>
  )
}

export default In