import {configureStore} from '@reduxjs/toolkit';
import valReducer from '../feature/GenerateSlice'

export const store = configureStore({
    reducer:valReducer
})