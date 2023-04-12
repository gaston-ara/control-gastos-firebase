import React from 'react'
import Item from './Item'
import { getTotal } from '../firebase/Firebase'
import { AppContext } from '../context/ContextProvider'

const List = (props) => {
    const {saveIngresos, saveEgresos} = AppContext()
    const Delete = async (e) => {
        let amountDeleted = e.target.parentNode.children[1].innerText
        let splice = amountDeleted.slice(1)
        let parsedSplice = JSON.parse(splice)
        let idToDelete = e.target.parentNode.id;
        let idTotal = props.total[0].id
        let total = await getTotal()
         let updateValue = props.operation === "suma"? total.docs[0].data().monto + parsedSplice : total.docs[0].data().monto - parsedSplice;
        await props.updateTotal(idTotal, updateValue)
        await props.toDelete(idToDelete)
        props.operation === "suma"? await saveEgresos() : await saveIngresos();
    }
  return (
    <div>
{props.arrayIn? props.arrayIn.map((doc, index) => {
    return <Item i={index} key={index} id={doc.id} asunto={doc.asunto} monto={doc.monto} time={doc.time} delete={Delete}/>
}) : <p>Cargando...</p> }
    </div>
  )
}

export default List