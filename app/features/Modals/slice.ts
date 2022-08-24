import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_Modal } from './models'

interface I_InitialState {
  modals: I_Modal[]
}

const initialState: I_InitialState = {
  modals: [],
}

export const modalsSlice = createSlice({
  name: 'modalsManager',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<I_Modal>) => {
      state.modals.push({ window: action.payload.window, data: action.payload.data })
    },
    closeModal: (state) => {
      state.modals.pop()
    },
  },
})

export const { openModal, closeModal } = modalsSlice.actions
