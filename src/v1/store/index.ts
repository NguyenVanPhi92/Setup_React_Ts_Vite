import { configureStore } from '@reduxjs/toolkit'
import { authSlice, loginSlice, logoutSlice } from '../features/admin/slice'
import { authSliceClient, loginSliceClient, logoutSlicelient } from '../features/client/slice'

export const store = configureStore({
  reducer: {
    authAdmin: authSlice,
    loginAdmin: loginSlice,
    logoutAdmin: logoutSlice,
    authClient: authSliceClient,
    loginClient: loginSliceClient,
    logoutClient: logoutSlicelient
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
