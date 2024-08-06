import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserData{
    email:string,
    name:string
    isLogin:boolean
}
const initialState:UserData = {
    email:'',
    name:'',
    isLogin: false
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action: PayloadAction<UserData>) => {
            state.email=action.payload.email;
            state.name = action.payload.name;
            state.isLogin = action.payload.isLogin;
        },
        clearUser: (state) => {
            state.email = '';
            state.name = '';
            state.isLogin = false;
          },
    }
})
export const {setUser,clearUser} = authSlice.actions;
export default authSlice.reducer