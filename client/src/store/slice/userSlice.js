import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../actions/userAction";

// initialize TOKEN from local storage
const userJson = localStorage.getItem("currentUser");
const user = JSON.parse(userJson) || null;

const initialState = {
  user: user,
  error : null,
  loader : false,
  success : false,
  token : null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser : (state, action) => {
        state.user = action.payload;
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
    }
  },
  extraReducers : (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error  = null;
    }),
    builder.addCase(userRegister.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    }),
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }),
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error  = null;
    }),
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error  = null;
      state.user = payload;
      state.success = true;
      localStorage.setItem('currentUser', JSON.stringify(payload));
    }),
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = true;
      state.error = payload;
    })
  }
});
export default userSlice.reducer;
export const { setUser } = userSlice.actions;
