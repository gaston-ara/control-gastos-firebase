import React, { useEffect, useState } from 'react'
import TotalAmount from '../components/TotalAmount'
import In from '../components/In'
import Out from '../components/Out'
import EditAmount from '../components/EditAmount'
import { AppContext } from '../context/ContextProvider'

const Home = () => {
    const {ingresosAll, egresosAll, total} = AppContext()
  return (
    <>
    <h1>Control de gastos</h1>
    <TotalAmount total={total}/>
    <EditAmount total={total}/>
    <div>
    <In ingresosAll={ingresosAll} total={total}/>
    <Out egresosAll={egresosAll} total={total}/>
    </div>
    </>
  )
}

export default Home


