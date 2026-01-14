import Sidebar from '@/components/sidebare/sidebar'



import React from 'react'

export default function Dashboard() {
    const user = {role: 'superadmin'}



    return (
        <div className='dashboard flex h-[100vh]  overflow-hidden '>
            <div className='border-amber-400 w-[250px]  '>
                <Sidebar />
            </div>

            <div className='bg-yellow-300 flex-1 overflow-y-scroll'>
                <div className='h-[100px]'>

                    

                </div>
            </div>
            
        </div>

    )
}
