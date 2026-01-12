import React, { useState } from 'react';
import DarkVeil from '../ReactBits/DarkVeil';
import { useForm } from 'react-hook-form';




const Register = () => {
  const {register, handleSubmit, reset} = useForm({

  })

  const RegisterForm = (e) => {
    console.log("Logging in with:", e);
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
        <div className="max-w-md p-8 w-full bg-white/100 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          {/* <div className="p-8  "> */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Pointage App
            </h2>
            
            <form onSubmit={handleSubmit(LoginForm)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="name@company.com"
                        {...register('name')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="name@company.com"
                        {...register('email')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                        {...register('password')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmer password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                        {...register('password_confirmation')}
                    />
                </div>
                  

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
              >
                Register
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?
              <a href="#" className="text-blue-600 font-medium hover:underline">
                To create a new account
              </a>
            </p>

          {/* </div> */}
        </div>
      </div>

    </div>
  );
};

export default RegisterForm;