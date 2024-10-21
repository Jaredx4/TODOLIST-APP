import { useState } from 'react'

import './App.css'
import { Register } from './componentes/Register'
import { Login } from './componentes/Login'
import { PagePpal } from './componentes/PagePpal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodoList } from './componentes/TodoList'






function App() {


  return (
    <>
    
    {
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<PagePpal/>}/>  
     <Route path='/Register' element={<Register/>}/>  
     <Route path='/Login' element={<Login/>}/>  

    </Routes>
    
    
    
    </BrowserRouter> }

   
   
    </>
  )
}

export default App
