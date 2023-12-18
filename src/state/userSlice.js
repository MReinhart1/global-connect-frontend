import { createSlice } from "@reduxjs/toolkit"
import client from "../axios/axios"

const initialState = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token')
}

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            login: (state, action) => {
                localStorage.setItem("email", action.payload.email)
                localStorage.setItem("token", action.payload.token)
          
                client.interceptors.request.use(function (config) {
                  config = {...config, headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}}
                  return config;
                }, function (error) {
                  return Promise.reject(error);
                });
                state.email = localStorage.getItem('email')
                state.token = localStorage.getItem('token')
              },
              logout: (state) => {
                state.email = ""
                state.token = ""
                localStorage.removeItem("email")
                localStorage.removeItem("token")
              },
            }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer;