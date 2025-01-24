import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/auth'
import loginSlice from './slice/login'
import logoutSlice from './slice/logout'
import detailSlice from './slice/getDetail'
import formattedDateSlice from './slice/formattedDate'
import schoolSlice from './slice/school'
import courseSlice from './slice/course'
export const store = configureStore({
  reducer: {
    auth: authSlice,
    login: loginSlice,
    logout: logoutSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
