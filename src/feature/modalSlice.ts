import {createSlice} from "@reduxjs/toolkit";

const initialStorage: { isModalOpen: boolean } = {
  isModalOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialStorage,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen
    }
  }
})

export const {toggleModal} = modalSlice.actions;
export default modalSlice.reducer;