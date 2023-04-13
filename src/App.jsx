import './App.css'
import ContextProvider from './context/ContextProvider'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <AppRouter/>
      </ContextProvider>
    </div>
  )
}

export default App
