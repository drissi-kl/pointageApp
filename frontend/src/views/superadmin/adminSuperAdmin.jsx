import React, { useMemo, useState } from 'react';
import { Search, Mail, Phone, MoreVertical, UserPlus, ShieldCheck } from 'lucide-react';
import ShowAdmins from '@/components/superadmin/showAdmins';
import AddAdmin from '@/components/superadmin/addAdmin';

export default function AdminSuperAdmin({user, admins}) {
  const [showAddAdminForm, setShowAddAdminForm]=useState(false);
  
  

  return (
    <div>
      {
        showAddAdminForm ? <AddAdmin showAdmins={()=>setShowAddAdminForm(false)} />
        : <ShowAdmins admins={admins} addAdmin={()=>setShowAddAdminForm(true)} />  
      }
    </div>
      
  );
}