import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { Navigate, Route, Router, Routes } from 'react-router-dom'

import Login from './views/auth/login'
import ForgetPassword from "./views/auth/forgetPassword"
import NewPassword from './views/auth/newPassword'
import Dashboard from './views/dashboard/dashboard'
import Register from './views/auth/register'
import getToken from './utilities/getToken'
// import RegisterForm from './components/auth/register'


const Protected = ({children }) => {
  const token = getToken();

  if(!token){
    return <Navigate to="/" />;
  }

  return children;
}




function App() {

  return <div>
    <Routes>
      <Route path="/" element={<Login />}  />
      <Route path="/forgetpassword" element={<ForgetPassword/>} />
      <Route path="/newPassword" element={<NewPassword/>} />
      <Route path="/register" element={<Register/>} />


      <Route path='/dashboard' element={ <Protected> <Dashboard /> </Protected> } />


    </Routes>
      

  </div>
  
}

export default App
