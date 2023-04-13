import React, { createContext, useContext, useState, useEffect } from 'react'
import {onGetIngresos, onGetEgresos, onGetTotal } from '../firebase/Firebase';

export const Context = createContext();
export const AppContext = () => useContext(Context);

const ContextProvider = ({children}) => {
    const [ingresosAll, setIngresosAll] = useState()
    const [egresosAll, setEgresosAll] = useState()
    const [total, setTotal] = useState()

    const fetchGetIngresos = async () => {
        await onGetIngresos(res => setIngresosAll(
            res.docs.map(doc => ({
            id:doc.id,
            asunto:doc.data().asunto,
            monto:doc.data().monto,
            time: new Date(doc.data().time).toLocaleString()
         }))) )
        
    }
    const fetchGetEgresos = async () => {
        await onGetEgresos(res => setEgresosAll(
            res.docs.map(doc => ({
            id:doc.id,
            asunto:doc.data().asunto,
            monto:doc.data().monto,
            time: new Date(doc.data().time).toLocaleString()
         }))) )
    }
    const fetchGetTotal = async () => {
        await onGetTotal(res => setTotal(
            res.docs.map(doc => ({
                id: doc.id,
                monto: JSON.parse(doc.data().monto),
         }))) )
    }
    useEffect(() => {
        fetchGetIngresos();
        fetchGetEgresos();
        fetchGetTotal();
    },[])
  return (
    <Context.Provider value={{ ingresosAll, egresosAll, total}}>{children}</Context.Provider>
  )
}

export default ContextProvider