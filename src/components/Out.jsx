import React from 'react'
import List from './List'
import InputsForm from './InputsForm'
import { addEgresos, deleteEgreso, updateTotal, getTotal } from '../firebase/Firebase'
import { AppContext } from '../context/ContextProvider'

const Out = (props) => {
    const {saveEgresos, saveTotal} = AppContext()
    const setEgresos = async (e) => {
        try {
            e.preventDefault()
            let item = {
                asunto: e.target.parentNode.children[1].value,
                monto: JSON.parse(e.target.parentNode.children[3].value),
                time: Date.now()
            }
            let id = props.total[0].id;
            let total = await getTotal()
            let newAmount = total.docs[0].data().monto - item.monto
            await addEgresos(item)
            await updateTotal(id, newAmount)
            e.target.parentNode.children[1].value = "";
            e.target.parentNode.children[3].value = undefined;
            e.target.parentNode.children[1].focus();
            await saveEgresos()
            await saveTotal()
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>Egresos
        <InputsForm onClickFunction={setEgresos}/>
        <List arrayIn={props.egresosAll} toDelete={deleteEgreso} total={props.total} updateTotal={updateTotal} operation={"suma"}/>
    </div>

  )
}

export default Out