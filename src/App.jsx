import React from 'react'
import { Fragment } from 'react';
import HomePage from './Pages/HomePage';
import toast, { Toaster } from 'react-hot-toast';
import './style.css'
const App=()=> {
  return (
   <Fragment>
    <HomePage></HomePage>
    <Toaster />
   </Fragment>
  )
}

export default App;
