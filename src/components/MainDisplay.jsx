import React, {useState, useEffect, useCallback} from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';

import { setDisplayParty } from "../redux/slices/displayPartySlice";

import PartyCard from "./PartyCard";


function MainDisplay() {
  const [attendees, setAttendees] = useState("");
  const [partySubmitted, setPartySubmitted] = useState(false);
  const [parties, setParties] = useState();
  const dispatch = useDispatch();


  const shufflePartyHandler =(event) => {
    getPartyIdeas();
    if (parties.length === 0) {
      console.log("No parties found for number of attendees, attendees enter", attendees)
    } else {
      dispatch(setDisplayParty(parties))
      setPartySubmitted(true);
    }
    event.preventDefault()
  }

  const getPartyIdeas = useCallback(() => {
    if (attendees !== '') {
      axios({
        url: "http://localhost:4444/parties",
        method: "GET",
        params: { attendees: attendees },
      }).then(res => {
        setParties(res.data)}
        ).catch(err => console.log(err));
      
    }
}, [attendees])

useEffect(() => {
  getPartyIdeas();
}, [getPartyIdeas])


  return (
    <main className="mainDisplay">
      <h2>Let's Shuffle Into a New Party!</h2>
      <div>
      </div>
      <form className="shuffleForm">
        <label for="attendeesAmount">Enter Number Of Guests</label>
        <input className="themeInput" type="number" name="attendeesAmount" onChange={e => setAttendees(e.target.value)}></input>
        <button className="shuffleBtn themeBtn" onClick={shufflePartyHandler} placeholder="Enter Guests">shuffle</button>
      </form>
      <div>{ partySubmitted && <PartyCard attendees={attendees} /> }</div>
    </main>
  );
}

export default MainDisplay;
