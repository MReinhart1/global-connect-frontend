import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fetchInfo: {name: "hi"}
}

const fetchSlice = createSlice(
    {
        name: 'fetch',
        initialState,
        reducers: {
            updateFetch(state, action) {
                state.fetchInfo.name = action.payload.name
            }
    } 
})

export const { updateFetch } = fetchSlice.actions

export default fetchSlice.reducer;