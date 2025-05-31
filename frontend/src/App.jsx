import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import { AnimatePresence } from 'framer-motion'
import Contact from './pages/Contact'
function App() {

  return (
    <>
    <AnimatePresence mode='wait'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<Home/>} />

      </Routes>
      </BrowserRouter>
    </AnimatePresence>
    </>
  )
}

export default App
