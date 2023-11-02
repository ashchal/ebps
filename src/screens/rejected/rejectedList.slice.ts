import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {showToastForError} from '@src/helpers'

import {rejectedListService} from './rejectedList.service'
type LoginRequest = {
  email: string
  password: string
}
const login = createAsyncThunk(
  'login/user',
  async (user: LoginRequest, thunkAPI) => {
    try {
      return await rejectedListService.rejectedList(user)
    } catch (error) {
      showToastForError(error)
      return thunkAPI.rejectWithValue('Cannot login!')
    }
  },
)

const initialState: {
  loading: boolean
  data?: Api.LoginResponse | null
  success: boolean
} = {
  loading: false,
  data: null,
  success: false,
}

const rejectedSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: state => {
      state.data = null
      state.success = false
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.success = true
    })
    builder.addCase(login.rejected, state => {
      state.loading = false
    })
  },
})

export const {logout} = rejectedSlice.actions
export {login}
export default rejectedSlice.reducer
