import React from 'react';
import { Trash2, AlertTriangle, X } from 'lucide-react'; // Assuming Lucide for icons
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEmployeeApi } from '@/services/employeeService';

export default function DeleteUser({ user, closeActions }) {
  const queryClient = useQueryClient();

  const deleteEmployeeMutation = useMutation({
    mutationFn: (e) => deleteEmployeeApi(e),
    onSuccess: (data, variable, context) => {
      console.log(data);
      
      const user_id = variable;

      queryClient.setQueryData(["employees"], (oldData)=>{
        const newData = oldData?.employees?.filter((employee)=>{return employee.id != user_id});
        return {...oldData, employees: newData};
        
      })

      closeActions()
    }
  })

  const deleteEmployee = () => {
    console.log('user_id', user.id);
    deleteEmployeeMutation.mutate(user.id);
  }


  return <main className="flex items-center justify-center p-4">
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
          Delete User
        </h1>
        <p className="text-gray-500 leading-relaxed">
          Are you sure you want to delete this user? This action is <span className="font-semibold text-gray-700">permanent</span> and cannot be undone.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="px-8 pb-8 flex flex-col sm:flex-row gap-3">

        <button onClick={() => deleteEmployee()}
          className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-shadow hover:shadow-lg flex items-center justify-center gap-2">
          <Trash2 size={18} />
          Delete Account
        </button>
      </div>
    </div>
  </main>
}