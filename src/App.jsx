import { useState } from 'react'

import './App.css'
import { Register } from './componentes/Register'
import { Login } from './componentes/Login'
import { PagePpal } from './componentes/PagePpal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodoList } from './componentes/TodoList'
import { PaginaIntro } from './componentes/PaginaIntro'






function App() {


  return (
    <>
    
    {
    <BrowserRouter>
    <Routes>
     <Route index path='/' element={<PaginaIntro/>}/>  
     <Route index path='/PagePpal' element={<PagePpal/>}/>
     <Route path='/Register' element={<Register/>}/>  
     <Route path='/Login' element={<Login/>}/>  

    </Routes>
    
    
    
    </BrowserRouter> }

   
   
    </>
  )
}

export default App
