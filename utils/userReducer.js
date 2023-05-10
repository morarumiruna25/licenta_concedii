import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.user.email;
      state.nume = action.payload.user.nume;

			Cookies.set("token", action.payload.user.email, { expires: 7 });

    },
    clearUser: (state) => {
      state.email = null;
      state.nume = null;

			Cookies.remove("token");

    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
