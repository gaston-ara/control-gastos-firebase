import React from 'react'

const InputsForm = (props) => {
  return (
    <div>
        <form action="">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" name='asunto' />
            <label htmlFor="monto">Monto</label>
            <input type="number" name='monto' />
            <button type='submit' onClick={(e) => props.onClickFunction(e)}>+</button>
        </form>
    </div>
  )
}

export default InputsForm