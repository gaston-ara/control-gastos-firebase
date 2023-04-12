import React, { useState } from 'react'
import List from './List'
import InputsForm from './InputsForm'
import { addIngresos, deleteIngreso, updateTotal, getTotal} from '../firebase/Firebase'
import { AppContext } from '../context/ContextProvider'

const In = (props) => {
    const {saveIngresos, saveTotal} = AppContext()
    const setIngresos = async (e) => {
        try {
            e.preventDefault()
            let item = {
                asunto: e.target.parentNode.children[1].value,
                monto: JSON.parse(e.target.parentNode.children[3].value),
                time: Date.now()
            }
            let id = props.total[0].id;
            let total = await getTotal()
            let newAmount = total.docs[0].data().monto + item.monto
            await addIngresos(item)
            await updateTotal(id, newAmount)
            //Reset Form
            e.target.parentNode.children[1].value = "";
            e.target.parentNode.children[3].value = undefined;
            e.target.parentNode.children[1].focus()
            await saveIngresos()
            await saveTotal()
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
        Ingresos
        <InputsForm onClickFunction={setIngresos}/>
        <List arrayIn={props.ingresosAll} toDelete={deleteIngreso} total={props.total} updateTotal={updateTotal} operation={"resta"}/>
    </div>
  )
}

export default In