import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser: JSON.parse(localStorage.getItem("currentUser")) ||{},
    users: JSON.parse(localStorage.getItem("users")) ||[]
}

const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        signup:(state,{payload})=>{
            console.log(payload);
            state.currentUser=payload
            state.users=[...state.users,payload]
            localStorage.setItem("currentUser",JSON.stringify(payload))
            localStorage.setItem("users",JSON.stringify(state.users))
        },
        login:(state,{payload})=>{
            state.currentUser=payload
            localStorage.setItem("currentUser",JSON.stringify(payload))
        },
        logout:(state,{payload})=>{
            state.currentUser={}
            localStorage.removeItem("currentUser")
        }
    }
})

export const {signup,login,logout}=usersSlice.actions

export const usersReducer=usersSlice.reducer
