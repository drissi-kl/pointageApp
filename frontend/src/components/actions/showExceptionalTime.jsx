import { AlarmClockCheck, Plus } from 'lucide-react'
import React from 'react'

export default function ShowExceptionalTime({addExceptionalTime, user}) {

    console.log("ShowExceptionalTime", user);


    return (
        <main>
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-800 dark:text-white flex items-center gap-2">
                        <AlarmClockCheck className="text-blue-600" />
                        Exceptional Time Management
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Manage system administrators and their contact details.</p>
                </div>
                
                <button onClick={()=>addExceptionalTime()} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all duration-300">
                    <Plus size={18} />
                    Add Exceptional Time
                </button>
            </header>

            <section>
                <div className='bg-zinc-800 rounded-2xl h-[250px] flex justify-center items-center'>
                    <span className='font-bold text-zinc-500 text-xl '>not has any exceptional time</span>
                    
                </div>
            </section>

        </main>
    )
}
