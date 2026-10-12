import { Box } from '@chakra-ui/react'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Producto from './pages/Producto/Producto.jsx'
import Smartwatches from './pages/Smartwatches/Smartwatches.jsx'
import Comparador from './pages/Comparador/Comparador.jsx'
import Guias from './pages/Guias/Guias.jsx'
import GuiaDetalle from './pages/Guias/GuiaDetalle.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Box minH='100vh' bg='white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/smartwatches' element={<Smartwatches />} />
          <Route path='/comparador' element={<Comparador />} />
          <Route path='/producto/:id' element={<Producto />} />
          <Route path='/guias' element={<Guias />} />
          <Route path='/guias/:id' element={<GuiaDetalle />} />
        </Routes>

        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
