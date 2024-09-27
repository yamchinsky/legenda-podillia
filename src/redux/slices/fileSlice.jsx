import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: {},
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFiles: (state, action) => {
      const { date, files } = action.payload;
      if (!state.files[date]) {
        state.files[date] = [];
      }
      state.files[date].push(...files);
    },
    renameFile: (state, action) => {
      const { date, index, newName } = action.payload;
      state.files[date][index].name = newName;
    },
    deleteFile: (state, action) => {
      const { date, index } = action.payload;
      state.files[date].splice(index, 1);
      if (state.files[date].length === 0) {
        delete state.files[date];
      }
    },
  },
});

export const { addFiles, renameFile, deleteFile } = filesSlice.actions;
export default filesSlice.reducer;
