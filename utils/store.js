import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import toastReducer from "./toastReducer";

const store = configureStore({
  reducer: {
    user: userSlice,
    toast: toastReducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
