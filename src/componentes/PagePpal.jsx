
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { TodoList } from './TodoList';

export const PagePpal = () => {

    

  return (
    <>
    <section>
    <Header/>
    </section>

    <section>
      <TodoList/>
    </section>


   </>
  )
}
