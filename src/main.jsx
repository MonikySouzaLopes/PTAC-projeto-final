import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cadastrar from './Cadastro/Cadastrar'
import Detalhe from './Detalhe/Detalhe';
import Destaque from './Destaque/Destaque';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cadastrar" element={<Cadastrar/>}></Route>
        <Route path='/Detalhe/:id' element={<Detalhe />}></Route>
        <Route path="/Destaque" element={<Destaque/>}></Route>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
