import React, { useState } from 'react';
import DarkVeil from '@/components/ReactBits/DarkVeil';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import StarBorder from '../../components/ReactBits/StarBorder';
import { setUser } from '@/store/sliceUser';
import { changePage } from '@/store/slicePage';
import { useMutation } from '@tanstack/react-query';
import { RegisterApi } from '@/services/authService';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    


    const {register, handleSubmit, reset, formState, getValues} = useForm({ })
    const {errors}=formState;

    const registerMutation = useMutation({
        mutationFn: (e)=>RegisterApi(e),
        onSuccess:(data, variable, context)=>{
            console.log('data return:', data);

            if(data.status == 'success'){
                document.cookie=`token=${data.token};max-age=3600`;
                dispatch(changePage('home'));
                navigate('/dashboard');

            }else{
                // add toast for show errors and warning to users

            }
        }
    })

    const registerForm = (e) => {
        console.log(e);
        e.role = 'superadmin';
        registerMutation.mutate(e);
    };

  return (
    <div className='absolute overflow-x-hidden'>

        <div style={{ width: '100vw', minHeight: '120vh', position: 'relative' }}  className='bg-amber-400 overflow-x-hidden' >
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
                
                <form onSubmit={handleSubmit(registerForm)} className="space-y-6 ">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 text-gray-200 bg-transparent rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500  focus:border-transparent outline-none transition-all"
                            placeholder="lastname firstname"
                            {...register('name', {
                                required : {value: true, message: 'enter your full name, it is required'} ,
                                pattern :{value: /^[A-Za-z]+ [A-Za-z]+$/, message:'full name must be contain lastname and firstname'}
                            })}
                        />
                        {errors.name && <p className='text-sm text-red-600 mt-1'>{errors.name.message}</p>}
                    </div>

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

                    <div>
                        <label className="block text-sm font-medium text-white mb-2">
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 text-gray-200 bg-transparent rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500  focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                            {...register('password_confirmation',{
                                validate:(input)=>{
                                    const password = getValues('password');
                                    if(password != input){
                                        return "passwords not matchs"
                                    }
                                }
                            })}
                        />
                        {errors.password_confirmation && <p className='text-sm text-red-600 mt-1'>{errors.password_confirmation.message}</p>}
                    </div>

                {/* <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-white">
                    <input type="checkbox" {...register('remindMe')} className="rounded border-gray-300 text-[#0f3089]  mr-2" />
                    Remind me
                    </label>
                    <Link to="/forgetpassword" className="text-sm text-blue-500 hover:underline">I forgot the password</Link>
                </div> */}

                <button
                    disabled = { registerMutation.isPending  }
                    type="submit"
                    className={`w-full ${registerMutation.isPending?'bg-blue-900':'bg-blue-600'} hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors duration-300`}
                >
                    {
                        registerMutation.isPending ? "Register ..." : "Register"
                    }
                    
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

export default Register;