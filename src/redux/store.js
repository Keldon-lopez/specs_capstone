import { configureStore } from "@reduxjs/toolkit"
import displayPartyReducer from "./slices/displayPartySlice";
import userSessionReducer from "./slices/userSessionSlice"

export default configureStore({
    reducer:{ 
        displayParty: displayPartyReducer,
        userSession: userSessionReducer,
    },
});