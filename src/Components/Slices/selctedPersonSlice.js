import { createSlice } from "@reduxjs/toolkit";

export const selectedPersonSlice = createSlice({
    name:"selectedPerson",
    initialState:"",
    reducers:{
        setSelectedPerson: (state,action) => {
            state = action.payload
        }
    }
})

export const {setSelectedPerson} = selectedPersonSlice.actions

export default selectedPersonSlice.reducer