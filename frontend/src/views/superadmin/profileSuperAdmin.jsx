import { currentUserApi } from '@/services/authService'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ProfileSuperAdmin() {

    const { data: activeUser, isLoading: loadingActiveUser } = useQuery({
        queryKey: ['activeUser'],
        queryFn: currentUserApi
    })


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

    {/* قسم الصورة والدور الوظيفي */}
    <div className="flex flex-col items-center justify-center space-y-4 mb-10">
        <div className="relative group">
            <img 
                src="./profile.jpeg" 
                alt="profileImage"
                className="h-48 w-48 rounded-full object-cover border-4 border-zinc-100 dark:border-zinc-800 shadow-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg">
                {activeUser.user.role}
            </div>
        </div>
    </div>

    {/* قسم البيانات والأزرار */}
    <div className="max-w-md mx-auto space-y-5">
        <div className="space-y-4">
            {/* حقل الاسم */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                    Full Name
                </label>
                <p className="text-lg font-semibold truncate">{activeUser.user.name}</p>
            </div>

            {/* حقل الإيميل */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                    Email Address
                </label>
                <p className="text-lg font-semibold truncate">{activeUser.user.email}</p>
            </div>
        </div>

        {/* زر التحديث الرئيسي */}
        <button className="w-full py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-2xl shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all">
            Update Profile
        </button>
    </div>
</main>
}
