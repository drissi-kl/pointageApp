import React from 'react'

export default function Timesheet() {
    return (
        <main>
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Timesheet Management</h1>
                <p className="text-zinc-500 text-sm">Manage and track your administrative hours.</p>
            </header>

            <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                <table class="w-full text-right border-collapse text-sm">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-200">
                            <th class="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">التاريخ (Date)</th>
                            <th class="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">وقت الوصول</th>
                            <th class="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">بداية الاستراحة</th>
                            <th class="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">نهاية الاستراحة</th>
                            <th class="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">وقت المغادرة</th>
                            <th class="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr class="hover:bg-blue-50/50 transition-colors">
                            <td class="px-6 py-4 font-medium text-gray-900">Nov 23, 2026</td>
                            <td class="px-6 py-4 text-gray-600">08:30</td>
                            <td class="px-6 py-4 text-gray-600">01:00</td>
                            <td class="px-6 py-4 text-gray-600">02:00</td>
                            <td class="px-6 py-4 text-gray-600">18:00</td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Present
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors">
                            <td class="px-6 py-4 font-medium text-gray-900">Nov 24, 2026</td>
                            <td class="px-6 py-4 text-gray-600 font-semibold text-red-500">09:30</td>
                            <td class="px-6 py-4 text-gray-600">01:00</td>
                            <td class="px-6 py-4 text-gray-600">02:00</td>
                            <td class="px-6 py-4 text-gray-600">18:00</td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                    Late
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors">
                            <td class="px-6 py-4 font-medium text-gray-900">Nov 25, 2026</td>
                            <td class="px-6 py-4 text-gray-600">08:30</td>
                            <td class="px-6 py-4 text-gray-600">01:00</td>
                            <td class="px-6 py-4 text-gray-600">02:00</td>
                            <td class="px-6 py-4 text-gray-600">18:00</td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
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
