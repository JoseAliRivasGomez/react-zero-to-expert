import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        state.counter += 1
    },
    decrement: (state) => {
        state.counter -= 1
    },
    incrementBy: (state, action) => {
        state.counter += action.payload
    },
  },
})

export const { increment, decrement, incrementBy } = counterSlice.actions