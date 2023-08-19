import React, {useState, useEffect, useCallback} from "react";
import { useDispatch } from "react-redux";
import PartyCard from "./PartyCard";
import axios from 'axios';

import { setDisplayParty } from "../redux/slices/displayPartySlice";


function MainDisplay() {
  const [attendees, setAttendees] = useState("");
  const [partySubmitted, setPartySubmitted] = useState(false);
  const [parties, setParties] = useState();
  const dispatch = useDispatch();


  const shufflePartyHandler =(event) => {
    getPartyIdeas();
    dispatch(setDisplayParty(parties))
    setAttendees(placeholder);
    setPartySubmitted(true);
    event.preventDefault()
  }

  let placeholder = "";

  const getPartyIdeas = useCallback(() => {
    axios.get(`http://localhost:4444/parties`)
        .then(res => setParties(res.data))
        .catch(err => console.log(err));
}, [])

useEffect(() => {
  getPartyIdeas();
}, [getPartyIdeas])


  return (
    <div>
      <p>Keldon's Capstone Main Display</p>
      <form>
        <input type="number" name="attendeesAmount" onChange={e => placeholder = e.target.value }></input>
        <button onClick={shufflePartyHandler}>shuffle</button>
      </form>
      <div>{ partySubmitted && <PartyCard attendees={attendees} /> }</div>
    </div>
  );
}

export default MainDisplay;
