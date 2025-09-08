import './App.css'
import { Routes,Route,Navigate } from 'react-router-dom'
import Before from './pages/before'
import After from './pages/after'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/before"/>}/>
        <Route path='/before' element={<Before/>}/>
        <Route path='/after' element={<After/>}/>
      </Routes>
    </>
  )
}

export default App
