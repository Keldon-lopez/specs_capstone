import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayPartySlice";

function PartyCard(props) {
  let currentDisplay = useSelector(selectDisplay);
  let randomParty = currentDisplay[(Math.floor(Math.random() * currentDisplay.length))]
  let {party_idea_name, partyTypeId, min_recommended_attendees, max_recommended_attendees, party_description} = randomParty;

  let {attendees} = props;
  return (
    <div>
      <p>Keldon's PartyCard </p>
      <p>Party Name: {party_idea_name} </p>
      <p>Party Type: {partyTypeId} </p>
      <p>Entered Attendees: {attendees}</p>
      <p>Minimum Recommended Attendees: {min_recommended_attendees} </p>
      <p>Maximum Recommended Attendees: {max_recommended_attendees} </p>
      <p>Event Description: {party_description} </p>
    </div>
  );
}
export default PartyCard;
