import { deleteExceptionTimeApi } from '@/services/exceptionalTimeService';
import timeFormat from '@/utilities/timeFormat'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AlarmClockCheck, AlertTriangle, Ban, Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

export default function ShowExceptionalTime({ addExceptionalTime, user }) {

    const queryClient = useQueryClient();
    const [exceptionalTimeSelected, setExceptionalTimeSelected] = useState(null);


    const confirmDeleteMutation = useMutation({
        mutationFn: (e) => deleteExceptionTimeApi(e),
        onSuccess: (data, variable, context) => {
            console.log('exceptional time deleting', data);
            if (data.status == 'success') {
                queryClient.setQueryData(['employees'], (oldData) => {
                    console.log('old data', oldData)
                    const newData = oldData.employees.map((emp) => {
                        if (emp.id == user.id) {
                            const expTimeUpdated = emp.exceptional_times.filter((exp) => { return exp.id != exceptionalTimeSelected.id })
                            return {...emp, exceptional_times: expTimeUpdated};
                        } else {
                            return emp;
                        }
                    })

                    console.log('new data', newData)
                    return {...oldData, employees: newData};
                })
                setExceptionalTimeSelected(null);
            }
        }
    })

    const confirmDelete = () => {
        confirmDeleteMutation.mutate(exceptionalTimeSelected.id)
    }


    return (
        <main>
            {
                exceptionalTimeSelected ? <main className="flex items-center justify-center p-4">
                    <div className="max-w-md w-full  rounded-2xl shadow-xl overflow-hidden ">

                        {/* Header/Icon Section */}
                        <div className=" p-6 flex justify-center">
                            <div className="bg-red-100 p-3 rounded-full">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 text-center">
                            <h1 className="text-2xl font-bold text-zinc-100 mb-2">
                                Delete Exceptional Time
                            </h1>
                            <p className="text-gray-500 leading-relaxed">
                                Are you sure you want to delete this exceptional time? This action is <span className="font-semibold text-gray-700">permanent</span> and cannot be undone.
                            </p>
                        </div>

                        <div className="p-8 text-center">

                            <p className="text-gray-500 leading-relaxed">
                                Day name <span className="font-semibold text-gray-700">{exceptionalTimeSelected.dayName}</span>
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                Arrival time <span className="font-semibold text-gray-700">{timeFormat(exceptionalTimeSelected.arrivalTime)}</span>
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="px-8 pb-8 flex flex-col sm:flex-row gap-3">

                            <button
                                onClick={() => confirmDelete()}
                                className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-shadow hover:shadow-lg flex items-center justify-center gap-2">
                                <Trash2 size={18} />
                                Delete
                            </button>

                            <button
                                onClick={() => setExceptionalTimeSelected(null)}
                                className="flex-1 px-4 py-3 rounded-xl bg-zinc-600 duration-300 text-white font-medium hover:bg-zinc-700 transition-shadow hover:shadow-lg flex items-center justify-center gap-2">
                                <Ban size={18} />
                                Cancel
                            </button>
                        </div>
                    </div>
                </main>
                    : <>
                        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-zinc-800 dark:text-white flex items-center gap-2">
                                    <AlarmClockCheck className="text-blue-600" />
                                    Exceptional Time Management
                                </h1>
                                <p className="text-zinc-500 dark:text-zinc-400">Manage system administrators and their contact details.</p>
                            </div>

                            <button onClick={() => addExceptionalTime()} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all duration-300">
                                <Plus size={18} />
                                Add Exceptional Time
                            </button>
                        </header>


                        <section>
                            {
                                user.exceptional_times.length > 0 ? <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                                    <table className="w-full text-left text-sm text-zinc-400">
                                        <thead className="bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold">Day Name</th>
                                                <th className="px-6 py-4 font-semibold">Arrival Time</th>
                                                <th className="px-6 py-4 font-semibold">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-zinc-800/50">
                                            {
                                                user?.exceptional_times?.map((expTime, index) => {
                                                    return <tr key={index} className="hover:bg-zinc-900/40 transition-colors group">
                                                        <td className="px-6 py-4 font-medium text-zinc-200 capitalize">{expTime.dayName}</td>

                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center  text-md font-medium text-zinc-300 ">
                                                                {
                                                                    expTime.arrivalTime.match(/^[0-9]{2}:[0-9]{2}/g)[0]
                                                                }
                                                            </span>
                                                        </td>

                                                        <td class="px-6 py-4 ">
                                                            <button
                                                                onClick={() => setExceptionalTimeSelected(expTime)}
                                                                className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-400 hover:border-red-900/50 hover:bg-red-950/30 hover:text-red-400 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/10">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                                Delete
                                                            </button>
                                                        </td>

                                                    </tr>
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>

                                    : <div className='bg-zinc-800 rounded-2xl h-[250px] flex justify-center items-center'>
                                        <span className='font-bold text-zinc-500 text-xl '>not has any exceptional time</span>
                                    </div>

                            }

                        </section>
                    </>
            }

        </main>
    )
}
