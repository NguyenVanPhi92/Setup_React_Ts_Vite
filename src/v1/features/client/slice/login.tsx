import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { HandlerToken } from 'src/utils'
import { toast } from 'react-toastify'
import { handleShowErr } from 'src/utils/handleErrorResponse'

interface loginState {
  token: string
  first_change_pass: boolean
  isLoading: boolean
  isError: boolean
}

interface infoLoginType {
  username: string
  password: string
  auth: 'admin' | 'teacher' | 'student' | 'vet'
  navigate?: () => void
}

const initialState: loginState = {
  token: '',
  first_change_pass: true,
  isLoading: false,
  isError: false
}

export const fetchLogin = createAsyncThunk(
  'fetchLogin',
  async ({ username, password, auth, navigate }: infoLoginType, { fulfillWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/${auth}/auth/jwt/login`,
        { username, password },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      const dataObj = {
        data: response.data ? response.data : response,
        auth,
        navigate
      }

      return fulfillWithValue(dataObj)
    } catch (error) {
      if (error instanceof AxiosError) {
        handleShowErr(error?.response?.data)
      }
    }
  }
)

const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload) {
          state.token = action.payload.data.access_token
          state.first_change_pass = action.payload.data.is_first_changed
          HandlerToken.setToken('ACCESS_TOKEN', action.payload.data.access_token, action.payload.auth)
          HandlerToken.setToken('REFRESH_TOKEN', action.payload.data.refresh_token, action.payload.auth)
          setTimeout(
            () => {
              localStorage.setItem('ACCESS_TOKEN', JSON.stringify({}))
              localStorage.setItem('REFRESH_TOKEN', JSON.stringify({}))
            },
            12 * 60 * 60 * 1000
          )

          if (action.payload.auth === 'admin') action.payload.navigate?.()

          toast.success(`Login Successful!`)

          // 1 * 60 * 1000, 1 min
        }
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.isError = true
        toast.error(`Invalid Information, Try Again!`)
      })
  }
})

export default loginSlice.reducer
