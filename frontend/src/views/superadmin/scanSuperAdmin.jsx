import React from 'react';
import { Scan, Clock, User, Shield, Check, ScanQrCode } from 'lucide-react'; // Suggested icons
import nameSign from '@/utilities/nameSign';


export default function ScanSuperAdmin() {

  const scans = [
    {name:'drissi abderrahmane', time:'08:30', type: 'start time'},
    {name:'drissi abderrahmane', time:'18:30', type: 'break time'},
    {name:'wafki hajar', time:'08:30', type: 'start time'},
  ]



  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-900 min-h-screen p-6 md:p-10 transition-colors">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className=" p-2 rounded-lg ">
            <ScanQrCode className="text-blue-600" size={22} />
          </div>
          <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Scan Management
          </h1>
        </div>
        
      </header>

      {/* Main Scanner Card */}
      <section className="relative group mb-12">
        <div className="relative bg-white dark:bg-zinc-900 h-[350px] w-full max-w-4xl mx-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-center items-center shadow-sm">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-full mb-4">
            <Scan size={48} className="text-zinc-400 dark:text-zinc-600" />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium text-xl italic">
            Scanner Standby
          </p>
          <button className="mt-6 px-6 py-2 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-lg font-semibold hover:scale-105 transition-transform">
            Turn On Scanner
          </button>
        </div>
      </section>

      {/* Activity Table */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-2">
          Recent Activity
        </h2>
        <div className="overflow-hidden bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                <th className="px-6 py-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">User</th>
                <th className="px-6 py-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">Timestamp</th>
                <th className="px-6 py-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">Entry Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {
                scans.map((scan, index)=>{return <tr key={index} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                          {
                            nameSign(scan.name)
                          }
                        </div>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">{ scan.name }</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400 font-mono text-sm">{ scan.time } AM</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {scan.type}
                      </span>
                    </td>
                  </tr>
                })
              }

              



            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}