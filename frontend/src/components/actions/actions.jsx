import React, { useState } from 'react'
import { Sheet, UserRoundX, AlarmClockCheck, CalendarCheck, X, ChevronRight } from 'lucide-react'

import Timesheet from './timesheet';
import ExceptionalTime from './exceptionalTime';
import Holiday from './holiday';
import DeleteUser from './deleteUser';

export default function Actions({user, closeActions}) {
    const [action, setAction] = useState('timesheet');

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-zinc-950/80 backdrop-blur-md p-4 md:p-10">
            {/* الحاوية الرئيسية - Main Wrapper */}
            <div className="flex h-full w-full max-w-6xl overflow-hidden rounded-[2rem] bg-zinc-950 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-zinc-800/50">
                
                {/* القائمة الجانبية - Sidebar */}
                <aside className="flex flex-col border-r border-zinc-800/50 p-8 lg:basis-[25%] md:basis-[35%] bg-zinc-900/20">
                    {/* معلومات المستخدم السريعة في الهيدر */}
                    <div className="mb-10 px-2">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Management</h2>
                        <h3 className="text-zinc-100 font-bold text-lg">Control Panel</h3>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {[
                            { id: 'timesheet', name: 'Timesheet', icon: Sheet },
                            { id: 'exceptionaltime', name: 'Exceptional Time', icon: AlarmClockCheck },
                            { id: 'holiday', name: 'Holiday', icon: CalendarCheck },
                        ].map((item) => (
                            <button 
                                key={item.id}
                                onClick={() => setAction(item.id)} 
                                className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm transition-all duration-300 ${
                                    action === item.id 
                                    ? "bg-zinc-100 text-zinc-950 shadow-lg shadow-white/5" 
                                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100" 
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon size={18} strokeWidth={action === item.id ? 2.5 : 2} />
                                    <span className={action === item.id ? "font-bold" : "font-medium"}>{item.name}</span>
                                </div>
                                {action === item.id && <ChevronRight size={14} className="opacity-50" />}
                            </button>
                        ))}

                        <div className="my-6 border-t border-zinc-800/50"></div>

                        {/* أزرار الإجراءات الخاصة */}
                        <button 
                            onClick={() => setAction('delete')} 
                            className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-medium transition-all ${
                                action === 'delete' 
                                ? "bg-red-500/10 text-red-500 border border-red-500/20" 
                                : "text-zinc-500 hover:bg-red-500/5 hover:text-red-400"
                            }`}
                        >
                            <UserRoundX size={18} /> Delete Account
                        </button>

                        <button 
                            onClick={() => closeActions()} 
                            className="mt-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-medium text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all"
                        >
                            <X size={18} /> Close Panel
                        </button>
                    </nav>
                </aside>

                <main className="flex-1 bg-[#09090b] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
                    
                    <div className="flex-1 p-10 overflow-y-auto relative z-10 custom-scrollbar">
                        <div className="max-w-4xl mx-auto">
                            {action === "timesheet" && <Timesheet user={user} />}
                            {action === "exceptionaltime" && <ExceptionalTime user={user} />}
                            {action === "holiday" && <Holiday user={user} />}
                            {action === "delete" && <DeleteUser user={user} />}
                        </div>
                    </div>
                </main>
                
            </div>
        </div>
    )
}