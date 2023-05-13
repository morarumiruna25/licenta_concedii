import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      // state.nume = action.payload.user.nume;

      Cookies.set('token', action.payload.user.email, { expires: 7 });
      Cookies.set('nume', action.payload.user.nume, { expires: 7 });
    },
    clearUser: state => {
      state.user = null;

      Cookies.remove('token');
      Cookies.remove('nume');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
