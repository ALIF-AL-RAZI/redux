import { createSlice } from "@reduxjs/toolkit";
const initialCounters = [
    {
      id:2,
      value:0
    },
    {
      id:3,
      value:0
    }
  ]

const counterSlice = createSlice({
    name: 'counters',
    initialState: initialCounters,
    reducers:{
        increment: (state, action)=>{
            const counterIndex = state.findIndex((counter)=>counter.id === action.payload);
            state[counterIndex].value++;
        },
        decrement: (state, action)=>{
            const counterIndex = state.findIndex((counter)=>counter.id === action.payload);
            state[counterIndex].value--;
        },
    }
})

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;
