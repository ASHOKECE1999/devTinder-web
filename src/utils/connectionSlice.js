import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConncetion: (state, actions) => actions.payload,
    removeConnection: (state, actions) => null,
  },
});

export const { addConncetion, removeConnection } = connectionSlice.actions;
export default connectionSlice.reducer;
