import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feedSlice",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      console.log(state, action);
      console.log("itsCamehere");
      const newConnction = state?.filter((t) => t?._id !== action?.payload);
      console.log(newConnction, "newConnction");
      return newConnction;
    },
  },
});
export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
