import AddPost from '@/components/superadmin/addPost';
import ShowPosts from '@/components/superadmin/showPosts';
import { getAllPostsApi } from '@/services/postService';
import { useQuery } from '@tanstack/react-query';
import { FlagTriangleLeft, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function PostsSuperAdmin() {
  const [showAddPostForm, setShowAddPostForm] = useState(true);
  
  return (
    <div>
      {
        showAddPostForm? <ShowPosts addPost={()=>{setShowAddPostForm(false)}} /> : <AddPost showPosts={()=>{setShowAddPostForm(true)}} />
      }
    </div>
  )
}
