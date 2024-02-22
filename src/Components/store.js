import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import peopleReducer from "./Slices/peopleSlice"
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    people:peopleReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})