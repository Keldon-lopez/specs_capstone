import React, {useState} from "react";
import PartyCard from "./PartyCard";

function MainDisplay() {
  const [attendees, setAttendees] = useState("");
  const [partySubmitted, setPartySubmitted] = useState(false);


  const alertMessageHandler =(event) => {
    setAttendees(placeholder)
    setPartySubmitted(true);
    event.preventDefault()
  }

  let placeholder = "";


  return (
    <div>
      <p>Keldon's Capstone Main Display</p>
      <form>
        <input type="number" name="attendeesAmount" onChange={e => placeholder = e.target.value }></input>
        <button onClick={alertMessageHandler}>shuffle</button>
      </form>
      <div>{ partySubmitted && <PartyCard attendees={attendees}/> }</div>
    </div>
  );
}

export default MainDisplay;
