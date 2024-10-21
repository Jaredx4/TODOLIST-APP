import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <>
        <header className="header">
            <Link to='/'>
            <h1 className="header-title">My Aplication </h1>
            </Link>
            <h2>Luis Jared Aparicio Linares</h2>
            <div className="header-buttons">
            <div className='B1'>
                <Link to="/Register">
            
                    <button className="header-button">REGISTER</button>
                </Link>
                </div>

                <div className='B2'>
                <Link to="/Login">
                    <button className="header-button">LOGIN</button>
                </Link>
                </div>

            </div>
        </header>
        </>
    )
}
