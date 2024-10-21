import React from 'react'
import { Link } from 'react-router-dom'

export const PaginaIntro = () => {
  return (
    <>
    
    <div>
        <Link to="/Register">
    
            <button >REGISTER</button>
        </Link>

        </div>
        

        <div>
        <Link to="/Login">
            <button>LOGIN</button>
        </Link>

        </div>
        


    </>
  )
}
