import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  color: {},
  finish: '',
  size: ''
};

export const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setFinish: (state, action) => {
      state.finish = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setId, setColor, setFinish, setSize, reset } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;
