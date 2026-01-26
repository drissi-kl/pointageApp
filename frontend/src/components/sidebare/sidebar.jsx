import React from 'react'



import { RiHome2Fill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { LuScanQrCode } from "react-icons/lu";
import { FaChartBar } from "react-icons/fa";


import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '@/store/slicePage';
import { FlagTriangleLeft } from 'lucide-react';





export default function Sidebar({user}) {
    // const user = useSelector(state => state.sliceUser.user );
    const page = useSelector(state => state.slicePage.page)


    const dispatch = useDispatch();






    return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-zinc-950 dark:border-zinc-800">
    
    <div className="flex items-center gap-x-3 px-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-xl">
            <FaGitAlt />
        </div>
        <span className="text-lg font-bold text-zinc-800 dark:text-white tracking-tight">Pointage</span>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-10">
        <nav className="space-y-2">
            <button 
                onClick={()=>dispatch(changePage('home'))}
                className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg
                    ${page == "home" ? 
                    'text-zinc-600 dark:text-zinc-800 dark:bg-zinc-100 ' 
                    :'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-700'} `
                }>
                <HiHome className="w-5 h-5"/> 
                <span className="mx-2 text-sm font-medium">Home</span>
            </button>

            {user?.role == 'superadmin' && <button 
                onClick={()=>dispatch(changePage('admins'))}
                className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg
                    ${page == "admins" ? 
                    'text-zinc-600 dark:text-zinc-800 dark:bg-zinc-100 ' 
                    :'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-700'} `
                }>
                <IoIosPerson className="w-5 h-5"/>
                <span className="mx-2 text-sm font-medium">Admins</span>
            </button>}

            {['superadmin', 'admin'].includes(user?.role) && <button 
                onClick={()=>dispatch(changePage('employees'))}
                className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg
                    ${page == "employees" ? 
                    'text-zinc-600 dark:text-zinc-800 dark:bg-zinc-100 ' 
                    :'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-700'} `
                }>
                <FaUserGroup className='w-5 h-5' />
                <span className="mx-2 text-sm font-medium">Employee</span>
            </button>
            }

            {['superadmin', 'admin'].includes(user?.role) && <button 
                onClick={()=>dispatch(changePage('scans'))}
                className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg
                    ${page == "scans" ? 
                    'text-zinc-600 dark:text-zinc-800 dark:bg-zinc-100 ' 
                    :'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-700'} `
                }>
                <LuScanQrCode className='w-5 h-5' />
                <span className="mx-2 text-sm font-medium">Scan</span>
            </button>}

            {['superadmin', 'admin'].includes(user?.role) && <button 
                onClick={()=>dispatch(changePage('posts'))}
                className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg
                    ${page == "posts" ? 
                    'text-zinc-600 dark:text-zinc-800 dark:bg-zinc-100 ' 
                    :'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-700'} `
                }>
                <FlagTriangleLeft className='w-5 h-5' />
                <span className="mx-2 text-sm font-medium">Posts</span>
            </button>}

            <button 
                onClick={()=>dispatch(changePage('reports'))}
                className={`flex w-full items-center px-3 py-2 transition-colors duration-300 transform rounded-lg
                    ${page == "reports" ? 
                    'text-zinc-600 dark:text-zinc-800 dark:bg-zinc-100 ' 
                    :'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-700'} `
                }>
                <FaChartBar className='w-5 h-5' />
                <span className="mx-2 text-sm font-medium">Reports</span>
            </button>
        </nav>

        <div className="mt-6">
            <button className="flex items-center w-full p-2 text-sm transition-colors duration-200 transform rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 group focus:outline-none">
                <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                <div className="flex-1 ml-3 text-left">
                    <h2 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{ user && user.email.slice(0,18)}...</h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">View Profile</p>
                </div>
                
            </button>
        </div>
    </div>
</aside>
  )
}
