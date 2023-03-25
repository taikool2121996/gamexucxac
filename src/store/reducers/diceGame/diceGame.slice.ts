import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './diceGame.initialState';

export const diceGameSlice = createSlice({
  name: 'diceGame',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pickTaiXiu: (state, action: PayloadAction<boolean>) => {
      state.taiXiu = action.payload;
      console.log('pickTaiXiu reducer work!!');
    },
  },
});

export const { pickTaiXiu } = diceGameSlice.actions;

export default diceGameSlice.reducer;
