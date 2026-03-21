import { currentUserApi } from '@/services/authService'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function ProfileSuperAdmin() {

    const [updateProfile, setUpdateProfile] = useState(false);

    const { data: activeUser, isLoading: loadingActiveUser } = useQuery({
        queryKey: ['activeUser'],
        queryFn: currentUserApi
    })

    const { register, handleSubmit, formState } = useForm()
    const { errors } = formState;

    const updateProfileForm = (e) => {
        console.log("update profile", e)
    }


    console.log('active user', activeUser)


    if (loadingActiveUser) {
        return <div>
            loading active user data
        </div>
    }


    return <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-6 transition-colors duration-300">
        {/* زر تسجيل الخروج في الأعلى */}
        <div className="flex justify-end max-w-2xl mx-auto mb-4">
            <button className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                Logout
            </button>
        </div>



        {
            !updateProfile ? (
                <div className="max-w-md mx-auto space-y-5">
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                                Full Name
                            </label>
                            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                {activeUser.user.name}
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                                Email Address
                            </label>
                            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                {activeUser.user.email}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setUpdateProfile(true)}
                        className="w-full py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-2xl shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all"
                    >
                        Update Profile
                    </button>
                </div>
            ) : (
                <div className="max-w-md mx-auto">
                    <form onSubmit={handleSubmit(updateProfileForm)} className="space-y-5">
                        <div className="space-y-4">

                            <div className="flex flex-col">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 px-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={activeUser.user.name}
                                    {...register('name', {
                                        required: { value: true, message: 'name is required' }
                                    })}
                                    className="w-full p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none transition-all dark:text-white"
                                />
                                {errors.name && <p className='text-red-500 text-sm mt-2'>{errors.name.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 px-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    defaultValue={activeUser.user.email}
                                    {...register('email', {
                                        required: { value: true, message: 'email is required' }
                                    })}
                                    className="w-full p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none transition-all dark:text-white"
                                />
                                {errors.email && <p className='text-red-500 text-sm mt-2'>{errors.email.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 px-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    placeholder='enter new password if you want to change that'
                                    {...register('newPassword')}
                                    className="w-full p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none transition-all dark:text-white"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 px-1">
                                    Repeat Password
                                </label>
                                <input
                                    type="password"
                                    placeholder='repeat your new password if you want to change that'
                                    {...register('repeatPassword')}
                                    className="w-full p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none transition-all dark:text-white"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 px-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder='enter password, it is required for change your informations'
                                    {...register('password', {
                                        required: { value: true, message: 'your password is required for change your information' }
                                    })}
                                    className="w-full p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:outline-none transition-all dark:text-white"
                                />
                                {errors.password && <p className='text-red-500 text-sm mt-2'>{errors.password.message}</p>}
                            </div>
                        </div>

                        {/* أزرار التحكم */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setUpdateProfile(false)}
                                className="flex-1 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-[2] py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-2xl shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            )
        }

    </main>
}
