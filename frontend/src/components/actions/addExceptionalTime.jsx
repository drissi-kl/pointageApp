import React from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createExceptionTimeApi } from '@/services/exceptionalTimeService';

export default function AddExceptionalTime({ user, showExceptionalTime }) {
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const {register, handleSubmit } = useForm();

    const addExceptionalTimeMutation = useMutation({
        mutationFn: (e) => createExceptionTimeApi(e),
        onSuccess: (data, variable, context) => {
            console.log('data', data);
        }
    })

    const addExceptionalTimeForm = (e) =>{
        e.user_id = user.id;
        addExceptionalTimeMutation.mutate(e);
        showExceptionalTime();
    }

    return (
        <div className="min-h-screen bg-zinc-950 p-6 text-zinc-200">
            <header className='mb-8 flex justify-start'>
                <button
                    className="group flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all shadow-sm"
                    onClick={() => showExceptionalTime()}
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to List</span>
                </button>
            </header>

            <div className="max-w-4xl mx-auto border border-zinc-900 bg-zinc-900/30 rounded-3xl overflow-hidden shadow-2xl">
                <form onSubmit={handleSubmit(addExceptionalTimeForm)} method="post" className="p-10">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-8 tracking-tight">Add Exceptional Entry</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

                        <div className="flex flex-col gap-3">
                            <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">
                                Select Day
                            </label>
                            <div className="relative group">
                                <select
                                    {...register('dayName')}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 py-4 px-5 pr-12 rounded-2xl outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all appearance-none cursor-pointer text-sm group-hover:bg-zinc-800/50"
                                >
                                    <option value="null" className="bg-zinc-950">Choose a day...</option>
                                    {dayNames.map((day, index) => { return <option key={index} value={day} className="bg-zinc-950">{day}</option> } )}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">
                                Arrival Time
                            </label>
                            <input
                                {...register('arrivalTime')}
                                type="time"
                                className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 py-4 px-5 rounded-2xl outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all text-sm [color-scheme:dark] group-hover:bg-zinc-800/50"
                            />
                        </div>
                    </div>

                    <div className="border-t border-zinc-800/50 pt-10 flex justify-end">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-10 py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-zinc-950/50"
                        >
                            <Save size={18} />
                            <span className="text-sm">Save Exceptional Time</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}