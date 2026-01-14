import { configureStore } from "@reduxjs/toolkit";
import sliceUser  from "./sliceUser";
import slicePage from "./slicePage";



const store = configureStore({
    reducer:{
        'sliceUser': sliceUser.reducer,
        'slicePage': slicePage.reducer
    }
})

export default store;