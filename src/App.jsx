import Home from './pages/Home'
import './App.css'
import ContextProvider from './context/ContextProvider'

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <Home/>
      </ContextProvider>
    </div>
  )
}

export default App
