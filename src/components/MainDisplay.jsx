import React, {useState} from "react";

function MainDisplay() {
  const [attendees, setAttendees] = useState("");
  const [partySubmitted, setPartySubmitted] = useState(false);


  const alertMessage =(event) => {
    
    console.log(event)
    alert(attendees)
    setPartySubmitted(true);
    event.preventDefault()
  }
  return (
    <header>
      <p>Keldon's Capstone Main Display</p>
      <form>
        <input type="number" name="attendeesAmount" onChange={e => setAttendees(e.target.value)}></input>
        <button onClick={alertMessage}>shuffle</button>
      </form>
      { partySubmitted && attendees }
    </header>
  );
}

export default MainDisplay;
