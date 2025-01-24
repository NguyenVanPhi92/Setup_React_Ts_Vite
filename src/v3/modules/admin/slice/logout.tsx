import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { HandlerToken } from 'src/utils'

const logOutSlice = createSlice({
  name: 'Logout',
  initialState: null,
  reducers: {
    logout: (_, action) => {
      HandlerToken.deleteToken('ACCESS_TOKEN', action.payload)
      HandlerToken.deleteToken('REFRESH_TOKEN', action.payload)
      toast.success('Logout successful')
    }
  }
})

export const { logout } = logOutSlice.actions
export default logOutSlice.reducer
