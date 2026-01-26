import React, { useMemo, useState } from 'react'
import { Search, MoreVertical, Clock7, FlagTriangleLeft, Plus } from 'lucide-react';
import Actions from './actions';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllAdminsApi } from '@/services/adminService';


export default function ShowPosts({addPost}) {
    const [searchPost, setSearchPost] = useState('');

    const queryClient = useQueryClient();
    
    // retriev posts from cache not server
    const posts = queryClient.getQueryData(['posts']);
    console.log('posts', posts);
    

    // for filter admins by name or email
    const filterePosts = useMemo(
        ()=>{
            return posts?.posts?.filter(post => 
                post.name.toLowerCase().includes(searchPost.toLowerCase()) 
            );
        }, [searchPost]
    )


    const [selectedPost, setSelectedPost]=useState(null);

    console.log('posts', posts);
    


    return (
        <main className="flex-1 bg-zinc-50 dark:bg-zinc-900 min-h-screen p-8">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-white flex items-center gap-2">
                    <FlagTriangleLeft className="text-blue-600" />
                    Post Management
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400">Manage system administrators and their contact details.</p>
                </div>
                
                <button onClick={()=>{addPost()}}  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all duration-300">
                    <Plus size={18} />
                    Create Post
                </button>
            </header>

            {/* Filter & Search Bar */}
            <div className="mb-6 flex items-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2 w-full max-w-md shadow-sm">
                <Search className="text-zinc-400 mr-2" size={20} />
                <input 
                type="text" 
                placeholder="Search posts by name..." 
                className="bg-transparent border-none focus:ring-0 text-zinc-700 dark:text-zinc-200 text-sm w-full"
                onChange={(e) => setSearchPost(e.target.value)}
                />
            </div>

            {/* Admins Table */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-100 dark:border-zinc-700">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Post Name</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Arrival Time</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
                    {filterePosts && filterePosts.map((post) => (
                        <tr key={post.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors duration-200 group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-100">{post.name}</p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    <Clock7 size={14} />
                                    {post.arrivalTime}
                                </div>
                            </td>
                        
                            <td className="px-6 py-4 text-right ">
                                <button onClick={()=>setSelectedPost(post)} className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-lg transition-colors relative overflow-visible">
                                    <MoreVertical size={18} className="text-zinc-400" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                
                {filterePosts?.length === 0 && (
                <div className="p-12 text-center text-zinc-500">
                    No admins found matching "{searchPost}"
                </div>
                )}
            </div>

            {
                // selectedPost && <Actions admin={selectedAdmin} closeActions={()=>setSelectedAdmin(null)} />
            }
        </main>
    )
}
