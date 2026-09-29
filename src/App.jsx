import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import "./App.css"
import Home from './Home'
import Sub1 from './Sub1'

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Sub1' element={<Sub1/>}/>
    </Routes>
    </>
  )
}

export default App
