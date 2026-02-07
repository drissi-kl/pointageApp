import React, { useEffect } from 'react'


import Sidebar from '@/components/sidebare/sidebar';
import HomeSuperAdmin from '../superadmin/homeSuperAdmin';
import { useSelector } from 'react-redux';
import EmployeeSuperAdmin from '../superadmin/employeeSuperAdmin';
import ScanSuperAdmin from '../superadmin/scanSuperAdmin';
import ReportsSuperAdmin from '../superadmin/reportsSuperAdmin';
import { useQuery } from '@tanstack/react-query';
import { currentUserApi } from '@/services/authService';
import PostsSuperAdmin from '../superadmin/postsSuperAdmin';

export default function Dashboard() {

    // const user = useSelector(state => state.sliceUser.user )
    const page = useSelector(state => state.slicePage.page )

    const {data, isLoading:userLoading } = useQuery({
        queryKey: ['currentUser'],
        queryFn: currentUserApi,
        refetchOnWindowFocus: false,  
    })

    console.log('user', data);

    if(userLoading){
        return <h2>
            user loading
        </h2>
    }

    return (
        <div className='dashboard flex h-[100vh]  overflow-hidden '>
            <div className='border-amber-400'>
                <Sidebar user={data.user} />
            </div>

            <div className='flex-5 overflow-y-scroll '>
                {
                    data.user.role == 'superadmin' ? (
                        page =='home'? <HomeSuperAdmin />
                        :page =='admins'? <AdminSuperAdmin />
                        :page =='employees'? <EmployeeSuperAdmin />
                        :page =='scans'? <ScanSuperAdmin />
                        :page == 'posts'? <PostsSuperAdmin />
                        :page == 'reports'? <ReportsSuperAdmin />
                        :null
                    )

                    :null
                    
                }
                
            </div>
            
        </div>

    )
}
