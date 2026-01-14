import  { createSlice } from "@reduxjs/toolkit";



const sliceUser = createSlice({
    name: 'sliceUser',
    initialState: {user: null},
    reducers: {
        setUser: (state, actions)=>{
            state.user = actions.payload;
        },
        logout: (state)=>{
            state.user = null;
        }
    }
})

export default sliceUser;
export const {setUser, logout} = sliceUser.actions






