import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import policyReducer from "./policySlice.js"
import fetchReducer from "./fetchSlice.js"

const store = configureStore({
    reducer: {
        user: userReducer,
        policy: policyReducer,
        fetch: fetchReducer
    }
})

export default store;