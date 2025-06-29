import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConncetion: (state, actions) => actions.payload,
    removeConnection: (state, actions) => {
      console.log(state, actions);
      console.log("itsCamehere");
      const newConnction = state?.filter(
        (t) => t?.fromUserId?._id !== actions?.payload
      );
      console.log(newConnction, "newConnction");
      return newConnction;
    },
  },
});

export const { addConncetion, removeConnection } = connectionSlice.actions;
export default connectionSlice.reducer;
