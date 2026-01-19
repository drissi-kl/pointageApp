import { createSlice } from "@reduxjs/toolkit";



const slicePage = createSlice({
    name: 'slicePage',
    initialState: {page: 'home'},
    reducers: {
        changePage: (state, actions)=>{
            state.page = actions.payload;
        }
    }
})





export default slicePage;
export const {changePage } = slicePage.actions


