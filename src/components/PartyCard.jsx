import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayPartySlice";

function PartyCard(props) {
  let currentDisplay = useSelector(selectDisplay);
  let randomParty = currentDisplay[(Math.floor(Math.random() * currentDisplay.length))]
  let {party_idea_name, partyTypeId, min_recommended_attendees, max_recommended_attendees, party_description} = randomParty;

  let {attendees} = props;
  return (
    <div className="partyCardParentContainer">
      <div className="partyCardContainer">
      <p className="partCardItem">You've entered {attendees} guests, We recommend this party!</p>
      <br/>
      <p className="partCardItem">Party Name: <br/>{party_idea_name} </p>
      {/* <p>Party Type: {partyTypeId} </p> */}
      <br/>
      <p className="partCardItem">We Recommend {min_recommended_attendees} To {max_recommended_attendees} Guest(s).</p>
      <br/>
      <p className="partCardItem">Event Description: <br/>{party_description} </p>
      </div>
    </div>
  );
}
export default PartyCard;
