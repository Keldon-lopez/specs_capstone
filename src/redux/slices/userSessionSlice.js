import { createSlice } from "@reduxjs/toolkit";

export const userSessionSlice = createSlice({
  name: "userSession",
  initialState: {
    value: false,
  },
  reducers: {
    setUserSession: (state, action) => {
      state.value = action.payload;
    },
    deleteUserSession: (state) => {
      state.value = false;
    },
  },
});

export const { setUserSession, deleteUserSession } =
  userSessionSlice.actions;

export const selectUserSession = (state) => {
  return state.userSession;
};

export default userSessionSlice.reducer;
