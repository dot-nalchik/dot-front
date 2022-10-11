import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface MainState {
  isMainPage: boolean;
}

const initialState: MainState = {
  isMainPage: true,
};

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeMainStatus: (state, action: PayloadAction<boolean>) => {
      state.isMainPage = action.payload;
    }
  },
});

export const {
  changeMainStatus,
} = main.actions;

export default main.reducer;
