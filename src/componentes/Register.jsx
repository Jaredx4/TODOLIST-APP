
import React from 'react'
import {useForm} from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../assets/firebase/config';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const Register = () => {
  
    const {register,handleSubmit} = useForm();

    const onSubmitForm = (data)=>{


        console.log(data);

        
createUserWithEmailAndPassword(auth, data.email, data.password, data.confirmPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Se ha realizado el registro con exito");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Correo ya se encuentra registrado");

    // ..
  });

    }


  return (
    <>

<section>
    <Header/>
    </section>


<section className='register1'>
    <h1>Registro</h1>
     <form className='form' onSubmit={handleSubmit(onSubmitForm)} >

        <div>
            <label>Correo Electronico</label>
            <input type='email' id='email' placeholder='Ejemplo:email@mail.com'{...register('email')}/>
        </div>

        <div>
            <label>Ingresar Contraseña </label>
            <input type='password' id='password' placeholder='Introducir Contraseña'{...register('password')}/>
        </div>

        <div>
            <label>Confirmar Contraseña</label>
            <input className='ree' type='password' id='confirmPassword' placeholder='Confirmar Contraseña'{...register('confirmPassword')}/>
        </div>
        <button type='submit'>REGISTER</button>
     </form>
     <br/>

     <div className='B'>

     <Link to="/">
     <button type='submit'>PAGINA PRINCIPAL</button>
     </Link>
     </div>

     </section>

    </>
  )
}