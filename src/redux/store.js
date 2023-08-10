import { configureStore } from "@reduxjs/toolkit"
import displayPartyReducer from "./slices/displayPartySlice";

export default configureStore({
    reducer:{ 
        displayParty: displayPartyReducer,
    },
});