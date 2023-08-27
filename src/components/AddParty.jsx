import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const AddParty = () => {
  const navigate = useNavigate()

  const [partyIdeaName, setPartyIdeaName] = useState("");
  const [minRecommendedAttendees, setMinRecommendedAttendees] = useState("");
  const [maxRecommendedAttendees, setMaxRecommendedAttendees] = useState("");
  const [partyDescription, setPartyDescription] = useState();
  const [partyTypeId, setPartyTypeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let body = {
      party_idea_name: partyIdeaName, 
      min_recommended_attendees: minRecommendedAttendees, 
      max_recommended_attendees: maxRecommendedAttendees, 
      party_description: partyDescription, 
      partyTypeId: partyTypeId
    }

    axios.post('http://localhost:4444/parties', body, {
        // headers: {
        //     authorization: token
        // }
    })
        .then(() => {
            navigate('/')
        })
        .catch(err => console.log(err))
    console.log(
      "submit handled",
      body
    );
  };

  return (
    <main className="addParty">
      <form className="add-party-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Party Idea Name"
          value={partyIdeaName}
          onChange={(e) => setPartyIdeaName(e.target.value)}
          className="form-input themeInput"
        />
        <br />
        <textarea
          type="text"
          placeholder="Party Description"
          value={partyDescription}
          onChange={(e) => setPartyDescription(e.target.value)}
          className="form-input addPartyTextArea"
        />
        <br />
        <p>Enter The Recommended Amount Of Attendees</p>
        <div className="attendeesInputParent">
        <input
          type="number"
          placeholder="Minimum"
          value={minRecommendedAttendees}
          onChange={(e) => setMinRecommendedAttendees(e.target.value)}
          className="form-input themeInput attendeesInput"
        />
        <br />
        <input
          type="number"
          placeholder="Maximum"
          value={maxRecommendedAttendees}
          onChange={(e) => setMaxRecommendedAttendees(e.target.value)}
          className="form-input themeInput attendeesInput"
        />
        </div>
        <br />
        <p>Enter Type of Party</p>
        <select className="form-input themeInput" onChange={(e) => setPartyTypeId(e.target.value)}>
          <option value="0">Dance Party</option>
          <option value="1">Murder Mystery</option>
          <option value="2">Dungeon & Dragons</option>
          <option value="3">Birthday party</option>
          <option value="4">Generic Party</option>
        </select>
        <br />
        <button className="form-btn themeBtn">submit</button>
      </form>
    </main>
  );
};

export default AddParty;
