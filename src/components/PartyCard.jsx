import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayPartySlice";

function PartyCard(props) {
  let currentDisplay = useSelector(selectDisplay);
  let {partyName, partyType, recommendedAttendees, partyDescription} = currentDisplay;

  let {attendees} = props;
  return (
    <div>
      <p>Keldon's PartyCard {attendees}</p>
      <p>Party Name: {partyName} </p>
      <p>Party Type: {partyType} </p>
      <p>Recommended Attendees: {recommendedAttendees} </p>
      <p>Entered Attendees: {}</p>
      <p>Event Description: {partyDescription} </p>
    </div>
  );
}
export default PartyCard;
