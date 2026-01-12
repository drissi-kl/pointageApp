import React, { useState } from 'react';
import DarkVeil from '@/components/ReactBits/DarkVeil';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';




const ForgetPassword = () => {
  const {register, handleSubmit, reset, formState} = useForm({
  })
  const {errors } = formState

  const navigate = useNavigate();

  const forgetPasswordForm = (e) => {
    console.log(e);
    navigate('/newPassword');
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
            
            <form onSubmit={handleSubmit(forgetPasswordForm)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-white mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 text-gray-200 bg-transparent rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500  focus:border-transparent outline-none transition-all"
                        placeholder="name@company.com"
                        {...register('email', {
                            required: {value: true, message: 'email is required'},
                            // pattern: {value: /[]/}
                        })}
                    />
                    {errors.email && <p className='text-red-500 mt-1 text-sm'>{errors.email.message}</p>}
                </div>

            

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                    Valide
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              I remember my account credintial! 
              <Link to="/" className="text-blue-500 font-medium hover:underline ml-1">
                Login
              </Link>
            </p>

          {/* </div> */}
        </div>
      </div>

    </div>
  );
};

export default ForgetPassword;