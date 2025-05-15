import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rides: [],
};

const rideSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    bookRide: (state, action) => {
      state.rides.push(action.payload);
    },
  },
});

export const { bookRide } = rideSlice.actions;
export default rideSlice.reducer;
