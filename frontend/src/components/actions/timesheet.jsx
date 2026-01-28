import { Sheet, CalendarDays, Clock } from 'lucide-react'
import React from 'react'

export default function Timesheet() {
    return (
        <main className="animate-in fade-in duration-500">
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                        <Sheet className="text-zinc-100" size={24} />
                    </div>
                    <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">Timesheet</h1>
                </div>
                <p className="text-zinc-500 text-sm ">
                    Review and monitor daily attendance and work hours.
                </p>
            </header>

            <div className="mt-6 flex justify-between items-center px-2 mb-4">
                <div className="flex gap-4">
                    <div className="text-[11px] text-zinc-500 flex items-center gap-2">
                        <Clock size={14} />
                        Total Hours: <span className="text-zinc-300 font-bold">164h</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 flex items-center gap-2">
                        <CalendarDays size={14} />
                        Days Worked: <span className="text-zinc-300 font-bold">21 Days</span>
                    </div>
                </div>
                <button className="text-[11px] font-bold text-zinc-400 hover:text-zinc-100 transition-colors">
                    Download Report (CSV)
                </button>
            </div>


            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-2xl">
                <table className="w-full text-left border-collapse text-sm">
                    <thead>
                        <tr className="bg-zinc-800/30 border-b border-zinc-800">
                            <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Date</th>
                            <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Arrival</th>
                            <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Break Start</th>
                            <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Break End</th>
                            <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Departure</th>
                            <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                        <tr className="hover:bg-zinc-800/30 transition-colors group">
                            <td className="px-6 py-4 font-medium text-zinc-200">Nov 23, 2026</td>
                            <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">08:30</td>
                            <td className="px-6 py-4 text-zinc-500">01:00</td>
                            <td className="px-6 py-4 text-zinc-500">02:00</td>
                            <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">18:00</td>
                            <td className="px-6 py-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                                    Present
                                </span>
                            </td>
                        </tr>

                        <tr className="hover:bg-zinc-800/30 transition-colors group border-l-2 border-l-transparent hover:border-l-amber-500/50">
                            <td className="px-6 py-4 font-medium text-zinc-200">Nov 24, 2026</td>
                            <td className="px-6 py-4 text-amber-500 font-bold">09:30</td>
                            <td className="px-6 py-4 text-zinc-500">01:00</td>
                            <td className="px-6 py-4 text-zinc-500">02:00</td>
                            <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">18:00</td>
                            <td className="px-6 py-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                    Late
                                </span>
                            </td>
                        </tr>

                        <tr className="hover:bg-zinc-800/30 transition-colors group">
                            <td className="px-6 py-4 font-medium text-zinc-200">Nov 25, 2026</td>
                            <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">08:30</td>
                            <td className="px-6 py-4 text-zinc-500">01:00</td>
                            <td className="px-6 py-4 text-zinc-500">02:00</td>
                            <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">18:00</td>
                            <td className="px-6 py-4 text-right">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                    Present
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </main>
    )
}