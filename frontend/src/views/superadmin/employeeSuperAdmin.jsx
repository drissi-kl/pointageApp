import React, { useMemo, useState } from 'react';
import { Search, Mail, Phone, MoreVertical, UserPlus, ShieldCheck } from 'lucide-react';

import { useQuery } from '@tanstack/react-query';

import AddEmployee from '@/components/superadmin/addEmployee';
import ShowEmployees from '@/components/superadmin/showEmployees';

import { getAllEmployeesApi } from '@/services/employeeService';

export default function AdminSuperAdmin() {
  const [showAddEmployeeForm, setShowAddEmployeeForm]=useState(false);  

  const {data: employees, isLoading: employeesLoading }=useQuery({
    queryKey: ['employees'],
    queryFn: getAllEmployeesApi
  })

  return (
    <div>
      {
        employeesLoading ? <div> loading employees </div>
        :showAddEmployeeForm ? <AddEmployee showEmployees={()=>setShowAddEmployeeForm(false)} />
        : <ShowEmployees addEmployee={()=>setShowAddEmployeeForm(true)} />  
      }
    </div>
      
  );
}