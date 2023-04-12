// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, orderBy, query, onSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmo_-entPQC2Kgd_uWO5EOoV8SJqjLQww",
  authDomain: "gastos-5b29c.firebaseapp.com",
  projectId: "gastos-5b29c",
  storageBucket: "gastos-5b29c.appspot.com",
  messagingSenderId: "591513863734",
  appId: "1:591513863734:web:d802f4da7ca1928da2fa97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Queries
const orderedIngresosAll = query(collection(db, "ingresos"), orderBy("time", "desc"))
const orderedEgresosAll = query(collection(db, "egresos"), orderBy("time", "desc"))

//TOTAL
//Obtener Total
export const getTotal = async () => await getDocs(collection(db, "total"));
//Obtener array de ingresos en tiempo real
export const onGetTotal = (callback) => onSnapshot(collection(db, "total"), callback);
//Actualizar total
export const updateTotal = async (id, newValue) => await updateDoc(doc(db, "total", id),{
    monto: newValue
  })

//INGRESOS
//Agregar Ingresos
export const addIngresos = async (text) => {
    await addDoc(collection(db, "ingresos"), text)
  };
//Obtener array de ingresos
export const getIngresosAll = async () => await getDocs(orderedIngresosAll);
//Obtener array de ingresos en tiempo real
export const onGetIngresos = (callback) => onSnapshot(orderedIngresosAll, callback);
// Borrar un ingreso
export const deleteIngreso = async id => await deleteDoc(doc(db, "ingresos", id)) 

//EGRESOS
//Agregar Egresos
export const addEgresos = async (text) => {
    await addDoc(collection(db, "egresos"), text)
  };
//Obtener array de egresos
  export const getEgresosAll = async () => await getDocs(orderedEgresosAll);
  //Obtener array de ingresos en tiempo real
export const onGetEgresos = (callback) => onSnapshot(orderedEgresosAll, callback);
// Borrar un egreso
export const deleteEgreso = async id => await deleteDoc(doc(db, "egresos", id)) 