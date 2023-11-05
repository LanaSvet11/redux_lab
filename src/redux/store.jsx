import { configureStore } from "@reduxjs/toolkit";
import stringReducer from "./slices/string";

const store = configureStore({
  reducer: {
    string: stringReducer,
  },
});

export default store;
