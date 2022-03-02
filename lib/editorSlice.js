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
    setFrontCanvasObjects: (state, action) => {
      state.front.canvas.objects = action.payload;
    },
    setBackCanvasObjects: (state, action) => {
      state.back.canvas.objects = action.payload;
    }
  },
});

export const { setOrientation, setFrontCanvasObjects, setBackCanvasObjects } = editorSlice.actions;

export default editorSlice.reducer;
