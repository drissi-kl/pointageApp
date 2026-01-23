import React, { useMemo, useState } from 'react';
import { Search, Mail, Phone, MoreVertical, UserPlus, ShieldCheck } from 'lucide-react';

import AddEmployee from '@/components/superadmin/addEmployee';
import ShowEmployees from '@/components/superadmin/showEmployees';

export default function AdminSuperAdmin() {
  const [showAddEmployeeForm, setShowAddEmployeeForm]=useState(false);  


  return (
    <div>
      {
        showAddEmployeeForm ? <AddEmployee showEmployees={()=>setShowAddEmployeeForm(false)} />
        : <ShowEmployees addEmployee={()=>setShowAddEmployeeForm(true)} />  
      }
    </div>
      
  );
}