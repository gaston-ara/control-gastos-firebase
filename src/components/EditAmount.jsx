import React from 'react'
import { updateTotal } from '../firebase/Firebase';
import { AppContext } from '../context/ContextProvider';

const EditAmount = (props) => {
    const {saveTotal} = AppContext()
    const update = async (e) => {
        e.preventDefault();
        let valueToUpdate = e.target.parentNode.children[1].value
        let idToUpdate = props.total[0].id
        await updateTotal(idToUpdate, valueToUpdate)
        e.target.parentNode.children[1].value = undefined;
        e.target.parentNode.children[1].focus();
        await saveTotal()
    }
  return (
    <div>
        <form action="">
            <label htmlFor="new-amount">Ingresar nuevo monto</label>
            <input type="number" />
            <button type='submit' onClick={(e)=> update(e)}>Enviar</button>
        </form>
    </div>
  )
}

export default EditAmount