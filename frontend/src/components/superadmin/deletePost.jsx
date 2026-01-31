import React from 'react'
import { AlertCircle, Trash2, X } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePostApi } from '@/services/postService'

export default function DeletePost({ showPosts, post }) {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation({
    mutationFn: (p)=>deletePostApi(p),
    onSuccess: (data, variable, context) => {
      queryClient.setQueryData(['posts'] ,(oldData)=>{
        const id = post.id;
        const newData = oldData.posts.filter((post)=>{return post.id != id});
        return {oldData, posts: newData};
      });
      
      showPosts();
    }
  })

  const deletePost = () => {
    deletePostMutation.mutate(post.id);
  }


  return (
    <main className="fixed inset-0 z-[100] flex justify-center items-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-md backdrop-blur-2xl bg-white/[0.03] border border-white/[0.08] rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
        
        <div className="flex justify-end p-6">
          <button 
            onClick={() => showPosts()} 
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/50 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-10 pb-12 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500/20 to-red-900/40 border border-red-500/30 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
              <AlertCircle size={44} className="text-red-400 -rotate-12 group-hover:rotate-0 transition-transform" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tight">
            Final Warning
          </h2>
          
          <p className="text-blue-100/60 text-center leading-relaxed mb-10">
            You're about to remove <span className="text-blue-400 font-bold tracking-wide">"{post?.title || 'this content'}"</span>. 
            Once confirmed, this data will vanish into the void.
          </p>

          <div className="flex flex-col w-full gap-4">
            <button 
              onClick={() => showPosts()} 
              className="w-full py-4 rounded-2xl border border-white/10 text-white/70 font-bold hover:bg-white/5 hover:text-white transition-all active:scale-95"
            >
              Take Me Back
            </button>
            
            <button 
              onClick={()=>{deletePost()} }
              className="relative group w-full py-4 rounded-2xl overflow-hidden font-black tracking-widest uppercase text-sm active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 group-hover:from-rose-600 group-hover:to-red-600 transition-all" />
              <div className="relative flex items-center justify-center gap-3 text-white">
                <Trash2 size={18} />
                Delete Forever
              </div>
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
      </div>
    </main>
  )
}