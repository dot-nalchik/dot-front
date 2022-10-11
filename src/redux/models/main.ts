import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface MainState {
  isMainPage: boolean;
  isFoodelityPage: boolean,
  isIrinaPage: boolean,
  isKausarPage: boolean,
  isQuickerPage: boolean,
  isPrintersPage: boolean,
  isSozaevPage: boolean,
}

const initialState: MainState = {
  isMainPage: true,
  isFoodelityPage: false,
  isIrinaPage: false,
  isKausarPage: false,
  isQuickerPage: false,
  isPrintersPage: false,
  isSozaevPage: false,
};

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeMainStatus: (state, action: PayloadAction<boolean>) => {
      state.isMainPage = action.payload;
    },
    changeFoodelityPage: (state, action: PayloadAction<boolean>) => {
      state.isFoodelityPage = action.payload;
    },
    changeIrinaPage: (state, action: PayloadAction<boolean>) => {
      state.isIrinaPage = action.payload;
    },
    changeQuickerPage: (state, action: PayloadAction<boolean>) => {
      state.isQuickerPage = action.payload;
    },
    changeKausarPage: (state, action: PayloadAction<boolean>) => {
      state.isKausarPage = action.payload;
    },
    changePrintersPage: (state, action: PayloadAction<boolean>) => {
      state.isPrintersPage = action.payload;
    },
    changeSozaevPage: (state, action: PayloadAction<boolean>) => {
      state.isSozaevPage = action.payload;
    },
  },
});

export const {
  changeMainStatus,
  changeFoodelityPage,
  changeIrinaPage,
  changeKausarPage,
  changeQuickerPage,
  changePrintersPage,
  changeSozaevPage,
} = main.actions;

export default main.reducer;
