import React from 'react'

const TotalAmount = (props) => {
  return (
    <>
        {props.total ? 
            <div id={props.total[0].id}>
                <h2>${props.total[0].monto}</h2>
                <span>
                <p>${Math.floor((props.total[0].monto / 30))} x dia para el mes</p>
                </span>
                <span>
                    <button>Editar</button>
                    </span>
            </div>
                : <p>...</p> 
}
    </>
  )
}

export default TotalAmount