import React from 'react'
import { Sheet, UserRoundX, AlarmClockCheck, CalendarCheck, CircleX } from 'lucide-react'

export default function Actions({admin, closeActions}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-zinc-950/40 backdrop-blur-sm p-4 md:p-10">
        <div className="flex h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl border border-zinc-800">
            
            <aside className="flex flex-col gap-2 border-r border-zinc-800 p-6 lg:basis-[22%] md:basis-[30%] sm:basis-[40%] bg-zinc-900/50">
                <div className="mb-6 px-2">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Actions</h2>
                </div>

                <nav className="flex flex-col gap-1.5">
                    <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all">
                        <Sheet size={18} />
                        Timesheet
                    </button>

                    <button className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-all">
                        <AlarmClockCheck size={18} />
                        Exceptional Time
                    </button>

                    <button className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-all">
                        <CalendarCheck size={18} />
                        Holiday
                    </button>

                    <div className="my-4 border-t border-zinc-800/50"></div>

                    <button className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all">
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
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Timesheet Management</h1>
                    <p className="text-zinc-500 text-sm">Manage and track your administrative hours.</p>
                </header>
                
            </div>
            </main>
            
        </div>
    </div>
  )
}
