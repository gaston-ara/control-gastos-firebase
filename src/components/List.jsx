import React from 'react'
import Item from './Item'
import { getTotal } from '../firebase/Firebase'
import styles from '../styles/list.module.css' 

const List = (props) => {

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

    }
  return (
    <div className={styles.list}>
{props.arrayIn? props.arrayIn.map((doc, index) => {
    return <Item i={index} key={index} id={doc.id} asunto={doc.asunto} monto={doc.monto} time={doc.time} delete={Delete}/>
}) : <p>Cargando...</p> }
    </div>
  )
}

export default List