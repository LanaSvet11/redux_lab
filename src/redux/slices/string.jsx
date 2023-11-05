import { createSlice } from "@reduxjs/toolkit";

const stringSlice = createSlice({
  name: "string",
  initialState: "Hello World!",
  reducers: {
    updateString: (state, action) => {
      return action.payload; // Update the string state with the payload
    },
  },
});

export const { updateString } = stringSlice.actions;
export default stringSlice.reducer;
