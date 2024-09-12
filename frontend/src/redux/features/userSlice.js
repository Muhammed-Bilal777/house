import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user : null,
    isAuthenticated: false
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser : (state,action)=>{
            state.user = action.payload
        },
        setAuth : (state,action)=>{
            state.isAuthenticated = action.payload
        }
    }
})



export const {setAuth ,setUser } = userSlice.actions

export default userSlice.reducer