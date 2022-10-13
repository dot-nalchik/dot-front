import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalStatus: (state, action: PayloadAction<ModalState>) => {
      state.isOpen = action.payload.isOpen;
    }
  }
});

export const {changeModalStatus} = modal.actions;

export default modal.reducer;
