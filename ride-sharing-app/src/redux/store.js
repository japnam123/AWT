import { configureStore } from "@reduxjs/toolkit";
import rideReducer from "./rideSlice";

const store = configureStore({
  reducer: {
    rides: rideReducer,
  },
});

export default store;
