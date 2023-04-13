import TotalAmount from '../components/TotalAmount'
import In from '../components/In'
import Out from '../components/Out'
import EditAmount from '../components/EditAmount'
import { AppContext } from '../context/ContextProvider'
import styles from '../styles/home.module.css'

const Home = () => {
    const {ingresosAll, egresosAll, total, isLoading} = AppContext()
  return (
    <>
    <h1>Control de gastos</h1>
    <TotalAmount total={total}/>
    <EditAmount total={total}/>
    <div className={styles.home}>
    <In ingresosAll={ingresosAll} total={total}/>
    <Out egresosAll={egresosAll} total={total}/>
    </div>
    </>
  )
}

export default Home


