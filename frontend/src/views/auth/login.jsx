import React, { useState } from 'react';
import DarkVeil from '@/components/ReactBits/DarkVeil';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import StarBorder from '../../components/ReactBits/StarBorder';
import { setUser } from '@/store/sliceUser';
import { changePage } from '@/store/slicePage';


const Login = () => {
  const {register, handleSubmit, reset, formState} = useForm({
    })

  const {errors}=formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginForm = (e) => {
    console.log(e);
    e.role = 'superadmin';
    dispatch(setUser(e));
    dispatch(changePage('home'));
    navigate('/dashboard');
  };

  return (
    <div className='absolute'>

      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <DarkVeil
          hueShift={25}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={2}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div> 

      <div className="min-h-screen flex items-center justify-center  p-4 absolute top-0 h-[100%] w-[100%] ">
        <div className="max-w-md p-8 w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          {/* <div className="p-8  "> */}
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Pointage App
            </h2>
            
            <form onSubmit={handleSubmit(LoginForm)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-gray-200 bg-transparent rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500  focus:border-transparent outline-none transition-all"
                  placeholder="name@company.com"
                  {...register('email', {
                    required : {value: true, message: 'enter email'} ,
                    pattern :{value: /^[A-Za-z][A-Za-z0-9_-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message:'your email not valid'}
                  })}
                />
                {errors.email && <p className='text-sm text-red-600 mt-1'>{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 text-gray-200 bg-transparent rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500  focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                  {...register('password',{
                    required: {value: true, message: 'enter password'}
                  })}
                />
                {errors.password && <p className='text-sm text-red-600 mt-1'>{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-white">
                  <input type="checkbox" {...register('remindMe')} className="rounded border-gray-300 text-[#0f3089]  mr-2" />
                  Remind me
                </label>
                <Link to="/forgetpassword" className="text-sm text-blue-500 hover:underline">I forgot the password</Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
              >
                Login
              </button>

              
  
          
            </form>

            {/* <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?
              <a href="#" className="text-blue-500 font-medium hover:underline">
                To create a new account
              </a>
            </p> */}

          {/* </div> */}
        </div>
      </div>

    </div>
  );
};

export default Login;