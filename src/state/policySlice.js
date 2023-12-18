import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    policy: {name: "Hello", number: 123}
}

const policySlice = createSlice(
    {
        name: 'policy',
        initialState,
        reducers: {
            updatePolicy(state, action) {
                state.policy.name = action.payload.name
                state.policy.number = action.payload.number
            }
    } 
})

export const { updatePolicy } = policySlice.actions

export default policySlice.reducer;