import React, { createContext, useContext, useState, useEffect } from 'react'
import { getEgresosAll, getIngresosAll, getTotal } from '../firebase/Firebase';

export const Context = createContext();
export const AppContext = () => useContext(Context);

const ContextProvider = ({children}) => {
    const [ingresosAll, setIngresosAll] = useState()
    const [egresosAll, setEgresosAll] = useState()
    const [total, setTotal] = useState()

    const fetchGetIngresos = async () => {
        let res = await getIngresosAll()
        return res.docs
    }
    const fetchGetEgresos = async () => {
        let res = await getEgresosAll()
        return res.docs
    }
    const fetchGetTotal = async () => {
        let res = await getTotal();
        return res.docs
    }

    const saveIngresos = async  () => {
        let arrIngresos = [];
        
        (await fetchGetIngresos()).map(doc => {
            let item ={
                id: doc.id,
                asunto: doc.data().asunto,
                monto: doc.data().monto,
                time: new Date(doc.data().time).toLocaleString()
            }
            arrIngresos.push(item)
        })
        
        setIngresosAll(arrIngresos);
        
    }
    const saveEgresos = async  () => {
        let arrEgresos = [];
        (await fetchGetEgresos()).map(doc => {
            let item ={
                id: doc.id,
                asunto: doc.data().asunto,
                monto: doc.data().monto,
                time: new Date(doc.data().time).toLocaleString()
            }
            arrEgresos.push(item)
        })
        setEgresosAll(arrEgresos);
    }
    const saveTotal = async () => {
        let arrTotal = [];
        (await fetchGetTotal()).map(doc => {
            let item ={
                id: doc.id,
                monto: JSON.parse(doc.data().monto),
            }
            arrTotal.push(item)
        })
        setTotal(arrTotal);
    }

    useEffect(() => {
        saveIngresos();
        saveEgresos();
        saveTotal();
    },[])
  return (
    <Context.Provider value={{ ingresosAll, egresosAll, total, saveIngresos, saveEgresos, saveTotal}}>{children}</Context.Provider>
  )
}

export default ContextProvider