import { createSlice } from "@reduxjs/toolkit";


export const selectedPersonSlice = createSlice({
    name:"selectedPerson",
    initialState: "",
    reducers:{
        setSelectedPerson: (state,action) => {
            console.log("action.payload", action.payload)
            // state = action.payload
            return action.payload;
            // console.log("dsfaaaaaaaaaaaaaaaaa", state)
        }

    }
})

export const {setSelectedPerson} = selectedPersonSlice.actions

export default selectedPersonSlice.reducer