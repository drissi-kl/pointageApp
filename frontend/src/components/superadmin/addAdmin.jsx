import React from 'react'

import {ShieldCheck} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { error } from 'three/src/utils.js';
import { StoreApi } from '@/services/authService';

export default function AddAdmin({showAdmins}) {
    const queryClient = useQueryClient();

    const {register, handleSubmit, reset, formState}=useForm();
    const {errors}=formState


    const addAdminMutation = useMutation({
        mutationFn: (e)=>StoreApi(e),
        onSuccess: (data, variable, context)=>{
            if(data.status === "success"){
                // instead retriev data from server only change cache (best practice of react query)d
                queryClient.setQueryData(['admins'], (oldData)=>{
                    return {...oldData, admins:[...oldData.admins, data.admin]};
                });

                showAdmins();

            }
        }
    })
    
    const addAdminForm = (e) =>{
        e.role = 'admin';
        addAdminMutation.mutate(e)
    }


    return (
        <main className="flex-1 bg-zinc-50 dark:bg-zinc-900 min-h-screen p-8">
        <header className='flex justify-between'>
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-white flex items-center gap-2">
                <ShieldCheck className="text-blue-600" />
                Add Admin
            </h1>
            <button onClick={()=>showAdmins()} className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-md  text-white font-semibold px-4 py-2' >Admins</button>
        </header>


        <div className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <form onSubmit={handleSubmit(addAdminForm)} className="space-y-6">
                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
                
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 ml-1">Full Name *</label>
                        <input 
                            type="text" 
                            {...register('name', {
                                required:{value:true, message:"Name is required for create admin"}
                            })} 
                            placeholder="Lastname Firstname"
                            className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
                        />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 ml-1">Email Address *</label>
                        <input 
                            type="email"    
                            {...register('email', {
                                required:{value:true, message:"Email is required for create admin"}
                            })} 
                            placeholder="admin@example.com"
                            className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 ml-1">Phone Number *</label>
                        <input 
                            type="tel" 
                            {...register('phone', {
                                required:{value:true, message:"Phone is required for create admin"}
                            })} 
                            placeholder="0x xx xx xx xx"
                            className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
                        />
                        {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
                    </div>

                    {/* Address Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 ml-1">Address</label>
                        <input 
                            type="text" 
                            {...register('address')} 
                            placeholder="enter admin adress"
                            className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
                        />
                    </div>
                
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-zinc-800">
                <button className={`w-full md:w-max px-6 py-3 ${addAdminMutation.isPending ? 'bg-blue-900' : 'bg-blue-600' }  bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 transition-all duration-200 transform active:scale-95`}>
                    {addAdminMutation.isPending ? "Create ..." : "Create"} 
                </button>
                </div>
            </form>
        </div>

            

        </main>
    )
}
