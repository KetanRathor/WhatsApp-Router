import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from "./Slices/peopleSlice"

export const store = configureStore({
  reducer: {
    people:peopleReducer,
  },
})