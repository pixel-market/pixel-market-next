import { createSlice } from '@reduxjs/toolkit'

const initialState: { id: number } = {
  id: 0,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    logout: () => initialState,
  },
})

export const { logout } = profileSlice.actions
