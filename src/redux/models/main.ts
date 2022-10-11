import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface MainState {
  isMainPage: boolean;
  isFoodelityPage: boolean,
  isIrinaPage: boolean,
  isKausarPage: boolean,
  isMinivanPage: boolean,
  isPrintersPage: boolean,
  isSozaevPage: boolean,
}

const initialState: MainState = {
  isMainPage: true,
  isFoodelityPage: false,
  isIrinaPage: false,
  isKausarPage: false,
  isMinivanPage: false,
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
    changeMinivanPage: (state, action: PayloadAction<boolean>) => {
      state.isMinivanPage = action.payload;
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
  changeMinivanPage,
  changePrintersPage,
  changeSozaevPage,
} = main.actions;

export default main.reducer;
