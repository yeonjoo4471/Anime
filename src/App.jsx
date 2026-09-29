import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import "./App.css"
import Home from './Home'
import Sub1 from './Sub1'
import ProductDetail from './ProductDetail'
import Footer from './Footer'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section')

    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/goods' element={<Sub1/>}/>
      <Route path='/goods/:id' element={<ProductDetail/>}/>
      <Route path='/Sub1' element={<Navigate to="/goods" replace />}/>
      <Route path='*' element={<Navigate to="/" replace />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
