import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from "./Slices/peopleSlice"
import  selectedPersonReducer  from './Slices/selctedPersonSlice'



export const store = configureStore({
  reducer: {
    people:peopleReducer,
    selectedPerson: selectedPersonReducer
  },
})