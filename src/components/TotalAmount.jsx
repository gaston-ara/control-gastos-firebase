import React from 'react'
import styles from '../styles/total-amount.module.css'
import IconEdit from '../icons/IconEdit'
import { NavLink } from 'react-router-dom'

const TotalAmount = (props) => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const daysLeft = lastDayOfMonth.getDate() - today.getDate();
  return (
    <>
      {props.total ?
        <div id={props.total[0].id}>
          <div className={styles.amount_container}>
            <h2>${props.total[0].monto}</h2>
            <span>
              <NavLink className={styles.btn_total_amount} to={"/edit-amount"}>
                <IconEdit />
              </NavLink>
            </span>
          </div>
          <span>
            <p>${Math.floor((props.total[0].monto / daysLeft))} x dia para el mes</p>
          </span>
        </div>
        : <p>...</p>
      }
    </>
  )
}

export default TotalAmount