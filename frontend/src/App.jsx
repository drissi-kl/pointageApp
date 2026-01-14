import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { Route, Router, Routes } from 'react-router-dom'

import Login from './views/auth/login'
import ForgetPassword from "./views/auth/forgetPassword"
import NewPassword from './views/auth/newPassword'
import Dashboard from './views/dashboard/dashboard'
// import RegisterForm from './components/auth/register'



function App() {

  return <div>
    <Routes>
      <Route path="/" element={<Login />}  />
      <Route path="/forgetpassword" element={<ForgetPassword/>} />
      <Route path="/newPassword" element={<NewPassword/>} />

      <Route path='/dashboard' element={<Dashboard />} />


    </Routes>
      

  </div>
  
}

export default App
