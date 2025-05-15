import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    { id: 1, name: "Music Concert", available: 5, booked: 0 },
    { id: 2, name: "Tech Conference", available: 3, booked: 0 },
    { id: 3, name: "Art Exhibition", available: 4, booked: 0 },
  ],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    bookEvent: (state, action) => {
      const event = state.events.find((e) => e.id === action.payload);
      if (event && event.available > 0) {
        event.available -= 1;
        event.booked += 1;
      }
    },
    cancelBooking: (state, action) => {
      const event = state.events.find((e) => e.id === action.payload);
      if (event && event.booked > 0) {
        event.available += 1;
        event.booked -= 1;
      }
    },
  },
});

export const { bookEvent, cancelBooking } = eventSlice.actions;
export default eventSlice.reducer;
