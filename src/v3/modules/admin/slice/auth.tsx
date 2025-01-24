import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from 'src/api/axiosClient'
import { TUserProfile } from 'src/types/common'
import { RootState } from '../store'

type TAuth = {
  student: TUserProfile | undefined
  teacher: TUserProfile | undefined
  admin: TUserProfile | undefined
  vet: TUserProfile | undefined
}

interface AuthState {
  isLoading: boolean
  data: TAuth
  isError: boolean
}

const initialState: AuthState = {
  isLoading: false,
  data: {
    student: undefined,
    teacher: undefined,
    admin: undefined,
    vet: undefined
  },
  isError: false
}

type authType = 'admin' | 'teacher' | 'student' | 'vet'

export const fetchAuth = createAsyncThunk('fetchAuth', async (auth: authType) => {
  const response = await axiosClient.get(`/${auth}/user/profile`)
  return { data: response.data, auth }
})

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.isLoading = false
        state.data[action.payload.auth] = action.payload.data
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.isError = true
      })
  }
})

export const authSelector = (state: RootState): AuthState => state.auth

export default authSlice.reducer
