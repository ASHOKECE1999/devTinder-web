import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequests: (state, action) => {
      console.log(state, action);
      console.log("itsCamehere");
      const newConnction = state?.filter(
        (t) => t?.fromUserId?._id !== action?.payload
      );
      console.log(newConnction, "newConnction");
      return newConnction;
    },
  },
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;
