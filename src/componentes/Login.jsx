import React from 'react'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../assets/firebase/config';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const {register, handleSubmit}=useForm();
    const navigate = useNavigate();

    const onSubmitForm=(data)=>{

        console.log(data);

        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("Se inicio sesion con exito");
          navigate('/PagePpal'); // Redirige a la página de inicio de sesión
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Correo o Usuario errones");
        });

    }

    
  return (
    <>

<section>
    <Header/>
    </section>


    <h1>Login</h1>
     <form className='form' onSubmit={handleSubmit(onSubmitForm)}>

        <div>
            <label>Correo Electronico</label>
            <input type='email' placeholder='Ingresar Correo' {...register('email')}/> 
        </div>

        <div>
            <label>Ingresar Contraseña</label>
            <input type='password' placeholder='Ingresar Contraseña'{... register('password')}/>
        </div>

       
        <button type='submit'>LOGIN</button>

     </form>
     <br/>

     <Link to="/">
     <button type='submit'>PAGINA PRINCIPAL</button>
     </Link>
     </>
  )
}
