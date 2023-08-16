import { createSlice } from "@reduxjs/toolkit";
// import initialParty from "../../assets/initialParty";

export const displayPartySlice = createSlice({
  name: "displayParty",
  initialState: {
    value: {
      max_recommended_attendees: 0,
      min_recommended_attendees: 0,
      partyTypeId: 0,
      party_description: "filler description",
      party_idea_name: "filler name",
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
