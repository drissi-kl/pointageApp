import AddPost from '@/components/superadmin/addPost';
import ShowPosts from '@/components/superadmin/showPosts';
import UpdatePost from '@/components/superadmin/updatePost';
import { getAllPostsApi } from '@/services/postService';
import { useQuery } from '@tanstack/react-query';
import { FlagTriangleLeft, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function PostsSuperAdmin() {
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [seletctPost, setSelectPost] = useState(null);
  
  return (
    <div>
      {
        showAddPostForm? <AddPost showPosts={()=>{setShowAddPostForm(false)}} />
        : seletctPost? <UpdatePost showPosts={()=>{setShowAddPostForm(false); setSelectPost(null)}} post = {seletctPost}  />
        : <ShowPosts postSelected={(post)=>setSelectPost(post)} addPost={()=>{setShowAddPostForm(true)}} /> 
      }
    </div>
  )
}
