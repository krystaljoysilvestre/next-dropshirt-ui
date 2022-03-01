import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orientation: 'Front',
  front: {
    canvas: {
      objects: []
    }
  },
  back: {
    canvas: {
      objects: []
    }
  },
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setOrientation: (state, action) => {
      state.orientation = action.payload;
    },
  },
});

export const { setOrientation } = editorSlice.actions;

export default editorSlice.reducer;
