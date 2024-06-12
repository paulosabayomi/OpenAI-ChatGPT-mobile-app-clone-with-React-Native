import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainState, TColorMode, TMessage } from './types'


// Define the initial state using that type
const initialState: IMainState = {
    app_mode: 'light',
    messages: [],
    active_drawer_route: "",
    prompt_input: ""
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAppColorMode: (state, action: PayloadAction<TColorMode>) => {
      state.app_mode = action.payload
    },
    updateMessages: (state, action: PayloadAction<TMessage>) => {
      state.messages.push(action.payload)
    },
    
    clearMessages: (state,) => {
        state.messages = []
    },

    setActiveDrawerRoute: (state, action: PayloadAction<string>) => {
      state.active_drawer_route = action.payload
    },

    updatePromptInput: (state, action: PayloadAction<string>) => {
      state.prompt_input = action.payload
    },

  },
})

export const { 
    setAppColorMode,
    updateMessages,
    clearMessages,
    setActiveDrawerRoute,
    updatePromptInput
} = mainSlice.actions

export default mainSlice.reducer