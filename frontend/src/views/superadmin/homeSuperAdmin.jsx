import { getAllAdminsApi } from '@/services/adminService';
import { getAllEmployeesApi } from '@/services/employeeService';
import { getAllPostsApi } from '@/services/postService';
import { changePage } from '@/store/slicePage';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useDispatch } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';


export default function HomeSuperAdmin() {
  const data = [
    { name: 'Alex R.', hours: 8.5 },
    { name: 'Jordan S.', hours: 7.2 },
    { name: 'Mila K.', hours: 9.0 },
    { name: 'Robert P.', hours: 6.8 },
    { name: 'Sarah W.', hours: 8.0 },
    { name: 'Chen L.', hours: 7.5 },
    { name: 'Elena G.', hours: 5.5 },
    { name: 'Alex R.', hours: 8.5 },
    { name: 'Jordan S.', hours: 7.2 },
    { name: 'Mila K.', hours: 9.0 },
    { name: 'Robert P.', hours: 6.8 },
    { name: 'Sarah W.', hours: 8.0 },
    { name: 'Chen L.', hours: 7.5 },
    { name: 'Elena G.', hours: 5.5 },
  ];

  const dispatch = useDispatch();

  // retriev admins
  const {data: admins, isLoading: adminsLoading }=useQuery({
    queryKey: ['admins'],
    queryFn: getAllAdminsApi
  })
  
  // retriev employees
  const {data: employees, isLoading: employeesLoading }=useQuery({
    queryKey: ['employees'],
    queryFn: getAllEmployeesApi
  })

  // retriev posts
  const {data: posts, isLoading: postsLoading} = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsApi
  })



  // console.log('home super admin user', user)

  if(adminsLoading || employeesLoading){
    return <p>loading admins and employees</p>
  }
  
  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-900 min-h-screen p-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">Daily Overview</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Welcome back, Alex. Here is what's happening today.</p>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 transition-all duration-300">
                    Download Report
                </button>
                <button onClick={()=>dispatch(changePage('scans'))} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all duration-300" >
                    + New Scan
                </button>
            </div>
        </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div onClick={()=>dispatch(changePage('employees'))} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm cursor-pointer hover:shadow-[0px_0px_10px_1px] hover:shadow-blue-400 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Employees</p>
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-white"> {employees?.employees?.length || 0} </h3>
      </div>
      
    </div>

    <div onClick={()=>dispatch(changePage('admins'))} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm cursor-pointer hover:shadow-[0px_0px_10px_1px] hover:shadow-green-400 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 2l3 2 3-2v3H9V2z" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Admins</p>
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-white"> {admins?.admins?.length || 0} </h3>
      </div>
    </div>

    <div className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm cursor-pointer hover:shadow-[0px_0px_10px_1px] hover:shadow-purple-400 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Active Scans</p>
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-white">43</h3>
      </div>
    </div>

    <div className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm cursor-pointer hover:shadow-[0px_0px_10px_1px] hover:shadow-zinc-400 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Latecomers</p>
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-white">12</h3>
      </div>
    </div>

  </div>

      <div className="mt-10 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-zinc-800 dark:text-white">Employee Productivity</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Hours worked by employee (Current Session)</p>
        </div>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={true} 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ fill: 'white', opacity: 0.1 }}
                contentStyle={{ borderRadius: '8px', border: 'none', background: "white", boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.8)' }}
              />
              <Bar 
                dataKey="hours" 
                fill="#3b82f6" 
                radius={[6, 6, 0, 0]} 
                barSize={40}
              >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} className="hover:opacity-80 transition-opacity duration-300" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
</main>
  )
}
