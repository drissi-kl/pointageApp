import dateFormat from '@/utilities/dateFormat';
import secondsToHours from '@/utilities/secondsToHours';
import timeFormat from '@/utilities/timeFormat';
import { Sheet, CalendarDays, Clock } from 'lucide-react'
import React, { useMemo, useState } from 'react'

export default function Timesheet({ user }) {

    console.log('user', user);


    const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currdate = new Date();
    const [year, setYear] = useState(currdate.getFullYear());
    const [month, setMonth] = useState(currdate.getMonth() + 1);

    const compareDates = (created_at, year, month) => {
        const date = new Date(created_at);
        if (date.getFullYear() == year && date.getMonth() + 1 == month) {
            return true;
        }
        return false;
    }

    const calculateDuration = (t) => {

        let arrivalTime = t.arrivalTime ? new Date(t.arrivalTime) : null;
        let beforeBreak = t.beforeBreak ? new Date(t.beforeBreak) : null;
        let afterBreak = t.afterBreak ? new Date(t.afterBreak) : null;
        let departureTime = t.departureTime ? new Date(t.departureTime) : null;
        let currentTime = new Date();

        console.log('arrivalTime', arrivalTime);
        console.log('beforeBreak', beforeBreak);
        console.log('afterBreak', afterBreak);
        console.log('departureTime', departureTime);


        let s = 0;

        if (departureTime) {
            s = (departureTime - afterBreak) + (beforeBreak - arrivalTime);

        } else if (afterBreak) {
            s = (currentTime - afterBreak) + (beforeBreak - arrivalTime);

        } else if (beforeBreak) {
            s = beforeBreak - arrivalTime;

        } else if (arrivalTime) {
            s = currentTime - arrivalTime;

        }

        return s;
    }


    
    
    
    const timesheet = useMemo(
        () => {
            return user?.timesheet?.filter((tm) => { return compareDates(tm.created_at, year, month) })
        }, [year, month]
    )
    
    const monthlyHours = () => {
        let s = 0;
        timesheet?.forEach((timesheet)=>{ s += calculateDuration(timesheet) })
        return secondsToHours(s);
    }

    console.log("timesheet", timesheet);


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

            <div className="flex flex-col sm:flex-row gap-5 p-6 bg-zinc-950  max-w-lg">

                <div className="flex flex-col flex-1 gap-2.5">
                    <label htmlFor="year" className="text-xs font-medium text-zinc-400 tracking-wide uppercase px-1">
                        Year
                    </label>
                    <div className="relative group">
                        <select
                            id="year"
                            className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm rounded-lg p-3 outline-none transition-all duration-200 hover:border-zinc-600 focus:ring-2 focus:ring-zinc-700 focus:border-zinc-500 cursor-pointer"
                            onChange={(e) => setYear(e.target.value)}
                            defaultValue={year}
                        >
                            <option value="" disabled className="text-zinc-500">Select year</option>
                            {years.map((year, index) => (
                                <option key={index} value={year} className="bg-zinc-900 text-zinc-100">{year}</option>
                            ))}
                        </select>

                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 gap-2.5">
                    <label htmlFor="month" className="text-xs font-medium text-zinc-400 tracking-wide uppercase px-1">
                        Month
                    </label>
                    <div className="relative group">
                        <select
                            id="month"
                            className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm rounded-lg p-3 outline-none transition-all duration-200 hover:border-zinc-600 focus:ring-2 focus:ring-zinc-700 focus:border-zinc-500 cursor-pointer"
                            onChange={(e) => setMonth(e.target.value)}
                            defaultValue={month}
                        >
                            <option value="" disabled className="text-zinc-500">Select month</option>
                            {months.map((month, index) => (
                                <option key={index} value={index + 1} className="bg-zinc-900 text-zinc-100">{month}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500 group-hover:text-zinc-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

            </div>












            <div className="mt-6 flex justify-between items-center px-2 mb-4">
                <div className="flex gap-4">
                    <div className="text-[11px] text-zinc-500 flex items-center gap-2">
                        <Clock size={14} />
                        Total Hours: <span className="text-zinc-300 font-bold">{ monthlyHours() }</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 flex items-center gap-2">
                        <CalendarDays size={14} />
                        Days Worked: <span className="text-zinc-300 font-bold">{timesheet?.length || 0} Days</span>
                    </div>
                </div>
                <button className="text-[11px] font-bold text-zinc-400 hover:text-zinc-100 transition-colors">
                    Download Report (CSV)
                </button>
            </div>


            {
                timesheet.length > 0 ? <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-2xl">
                    <table className="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr className="bg-zinc-800/30 border-b border-zinc-800">
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Date</th>
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Arrival</th>
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Break Start</th>
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Break End</th>
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Departure</th>
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Duration</th>
                                <th className="px-6 py-5 font-black text-zinc-500 uppercase tracking-widest text-[10px]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/50">
                            {timesheet?.map((timesheet, index) => {
                                return <tr key={index} className="hover:bg-zinc-800/30 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-zinc-200">{ dateFormat(timesheet.created_at) }</td>
                                    <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">{timeFormat(timesheet?.arrivalTime) || "-"}</td>
                                    <td className="px-6 py-4 text-zinc-500 group-hover:text-zinc-200">{timeFormat(timesheet?.beforeBreak) || "-"}</td>
                                    <td className="px-6 py-4 text-zinc-500 group-hover:text-zinc-200">{timeFormat(timesheet?.afterBreak) || "-"}</td>
                                    <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">{timeFormat(timesheet?.departureTime) || "-"}</td>
                                    <td className="px-6 py-4 text-zinc-400 group-hover:text-zinc-200">{secondsToHours(calculateDuration(timesheet)) || 'hh'}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border 
                                                ${timesheet.late ? "bg-yellow-500/10 text-yellow-500  border-yellow-500/20"
                                                    :timesheet.sick ? "bg-amber-500/10 text-amber-500  border-amber-500/20"
                                                    :timesheet.holiday ? "bg-blue-500/10 text-blue-500  border-blue-500/20"
                                                    :'bg-emerald-500/10 text-emerald-500  border-emerald-500/20'}
                                            `}>
                                            <div className={`w-1 h-1 rounded-full animate-pulse ${
                                                    timesheet.late ? "bg-yellow-500"
                                                    :timesheet.sick ? "bg-amber-500"
                                                    :timesheet.holiday ? "bg-blue-500"
                                                    :'bg-emerald-500'
                                                }`}></div>
                                            {
                                                timesheet.late ? "Late"
                                                :timesheet.sick ? "Sick"
                                                :timesheet.holiday ? "Holiday"
                                                :"Present"
                                            }
                                        </span>
                                    </td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>

                    : <div className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 text-zinc-400">
                        <div className="mb-4 text-zinc-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>

                        </div>

                        <h3 className="text-lg font-semibold text-zinc-200">No scans found</h3>
                        <p className="text-sm text-zinc-500 mt-1 text-center max-w-[250px]">
                            We couldn't find any scans for the selected period. Try adjusting your filters.
                        </p>
                    </div>

            }




        </main>
    )
}