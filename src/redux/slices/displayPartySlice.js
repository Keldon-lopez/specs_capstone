import { createSlice } from "@reduxjs/toolkit";
// import initialParty from "../../assets/initialParty";

export const displayPartySlice = createSlice({
  name: "displayParty",
  initialState: {
    value: {
      partyName: "Filler Name",
      partyType: "Filler Type",
      recommendedAttendees: "Filler Attendees",
      partyDescription: "Filler Description",
  },
  },
  reducers: {
    setDisplayParty: (state, action) => {
      state.value = action.payload;
    },
    deleteDisplayParty: (state) => {
      state.value = null;
    },
  },
});

export const { setDisplayParty, deleteDisplayParty } =
  displayPartySlice.actions;

export const selectDisplay = (state) => {
  return state.displayParty.value;
};

export default displayPartySlice.reducer;
