import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {authService} from './auth.service';
import type {SessionResponse} from './auth.service';

const session = createAsyncThunk(
  'auth/session',
  async ({onSuccess}: {onSuccess: () => void}, thunkAPI) => {
    try {
      const response = await authService.session();
      onSuccess();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('Not Authorized!');
    }
  },
);

const logout = createAsyncThunk(
  'auth/logout',
  async ({onSuccess}: {onSuccess: () => void}, thunkAPI) => {
    try {
      const response = await authService.logout();
      onSuccess();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('Cannot logout!');
    }
  },
);

const initialState: {
  loading: boolean;
  data?: SessionResponse | null;
} = {
  loading: true,
  data: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(session.pending, state => {
      state.loading = true;
    });
    builder.addCase(session.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(session.rejected, state => {
      state.loading = false;
    });
  },
});

export {session, logout};
export default authSlice.reducer;
