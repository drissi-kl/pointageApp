import React from 'react'

import {FlagTriangleLeft, ShieldCheck} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { error } from 'three/src/utils.js';
import { StoreApi } from '@/services/authService';
import { createPostApi } from '@/services/postService';

export default function AddPost({showPosts}) {
    const queryClient = useQueryClient();

    const {register, handleSubmit, reset, formState}=useForm();
    const {errors}=formState


    const addPostMutation = useMutation({
        mutationFn: (e)=>createPostApi(e),
        onSuccess: (data, variable, context)=>{
            console.log(data);
            if(data.status === "success"){
                // instead retriev data from server only change cache (best practice of react query)
                queryClient.setQueryData(['posts'], (oldData)=>{
                    return {...oldData, posts:[...oldData.posts, data.post]};
                })
                showPosts();
            }
        }
    })
    const addPostForm = (e) =>{
        addPostMutation.mutate(e)
    }


    return (
        <main className="flex-1 bg-zinc-50 dark:bg-zinc-900 min-h-screen p-8">
        <header className='flex justify-between'>
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-white flex items-center gap-2">
                <FlagTriangleLeft className="text-blue-600" />
                Add Post
            </h1>
            <button onClick={()=>showPosts()} className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-md  text-white font-medium px-4 py-2' >Posts</button>
        </header>


        <div className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-6">Post Information</h2>
            
            <form onSubmit={handleSubmit(addPostForm)} className="space-y-6">
                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
                
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 ml-1">Post Name *</label>
                        <input 
                            type="text" 
                            {...register('name', {
                                required:{value:true, message:"post name is required for create post"}
                            })} 
                            placeholder="enter name of post"
                            className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
                        />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                    </div>


                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 ml-1">Arrival Time *</label>
                        <input 
                            type="time" 
                            {...register('arrivalTime', {
                                required:{value:true, message:"arrival time is required for create post"}
                            })} 
                            placeholder="enter arrival time for this post"
                            className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-zinc-500"
                        />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.arrivalTime.message}</p>}
                    </div>

                  
                  
                
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-zinc-800">
                <button className={`w-full md:w-max px-6 py-3 ${addPostMutation.isPending ? 'bg-blue-900' : 'bg-blue-600' }  bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 transition-all duration-200 transform active:scale-95`}>
                    {addPostMutation.isPending ? "Create ..." : "Create"} 
                </button>
                </div>
            </form>
        </div>

            

        </main>
    )
}
