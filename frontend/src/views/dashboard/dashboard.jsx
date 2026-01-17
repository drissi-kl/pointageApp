import React from 'react'


import Sidebar from '@/components/sidebare/sidebar';
import HomeSuperAdmin from '../superadmin/homeSuperAdmin';
import { useSelector } from 'react-redux';
import AdminSuperAdmin from '../superadmin/adminSuperAdmin';
import EmployeeSuperAdmin from '../superadmin/employeeSuperAdmin';
import ScanSuperAdmin from '../superadmin/scanSuperAdmin';
import ReportsSuperAdmin from '../superadmin/reportsSuperAdmin';
import { useQuery } from '@tanstack/react-query';

export default function Dashboard() {
    const user = useSelector(state => state.sliceUser.user )
    const page = useSelector(state => state.slicePage.page )

    // const {data } = useQuery({
    //     queryKey: ['currentUser'],
    //     queryFn:
    // })

    return (
        <div className='dashboard flex h-[100vh]  overflow-hidden '>
            <div className='border-amber-400'>
                <Sidebar />
            </div>

            <div className='flex-5 overflow-y-scroll '>
                {
                    user.role == 'superadmin'?(
                        page =='home'? <HomeSuperAdmin />
                        :page =='admins'? <AdminSuperAdmin />
                        :page =='employees'? <EmployeeSuperAdmin />
                        :page =='scans'? <ScanSuperAdmin />
                        :page == 'reports'? <ReportsSuperAdmin />
                        :null
                    )
                    :null
                    
                }
                
            </div>
            
        </div>

    )
}
