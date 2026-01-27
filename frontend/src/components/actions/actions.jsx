import React, { useState } from 'react'
import { Sheet, UserRoundX, AlarmClockCheck, CalendarCheck, CircleX } from 'lucide-react'

import Timesheet from './timesheet';
import ExceptionalTime from './exceptionalTime';
import Holiday from './holiday';
import DeleteUser from './deleteUser';

export default function Actions({user, closeActions}) {
    const [action, setAction]=useState('timesheet');
    

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-zinc-950/40 backdrop-blur-sm p-4 md:p-10">
            <div className="flex h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl border border-zinc-800">
                
                <aside className="flex flex-col gap-2 border-r border-zinc-800 p-6 lg:basis-[22%] md:basis-[30%] sm:basis-[40%] bg-zinc-900/50">
                    <div className="mb-6 px-2">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Actions</h2>
                    </div>

                    <nav className="flex flex-col gap-1.5">
                        <button onClick={()=>setAction('timesheet')} className={`${action == "timesheet" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20 font-semibold" : "font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 " }   flex items-center gap-3 rounded-xl  px-4 py-2.5 text-sm  transition-all  `}>
                            <Sheet size={18} />
                            Timesheet
                        </button>

                        <button  onClick={()=>setAction('exceptionaltime')} className={`${action == "exceptionaltime" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20 font-semibold" : "font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 " }   flex items-center gap-3 rounded-xl  px-4 py-2.5 text-sm  transition-all  `}>
                            <AlarmClockCheck size={18} />
                            Exceptional Time
                        </button>

                        <button  onClick={()=>setAction('holiday')} className={`${action == "holiday" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20 font-semibold" : "font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 " }   flex items-center gap-3 rounded-xl  px-4 py-2.5 text-sm  transition-all  `}>
                            <CalendarCheck size={18} />
                            Holiday
                        </button>

                        <div className="my-4 border-t border-zinc-800/50"></div>

                        <button onClick={()=>{deleteUser()}} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all">
                            <UserRoundX size={18} />
                            Delete Account
                        </button>
                        <button onClick={()=>closeActions()} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-all">
                            <CircleX size={18} />
                            Close
                        </button>
                    </nav>
                </aside>

                <main className="flex-1 bg-zinc-50 dark:bg-[#09090b] overflow-y-auto">
                <div className="p-8">
                    {
                        action == "timesheet" ? <Timesheet user={user} /> 
                        :action == "exceptionaltime" ? <ExceptionalTime user={user} />
                        :action == "holiday" ? <Holiday user={user} />
                        :action == "delete" ? <DeleteUser user={user} />
                        :null
                    }

                    
                    
                </div>
                </main>
                
            </div>
        </div>
    )
}
