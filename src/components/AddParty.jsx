import { useState, useContext } from "react";
import axios from "axios";

const AddParty = () => {
  const [partyIdeaName, setPartyIdeaName] = useState("");
  const [maxRecommendedAttendees, setMaxRecommendedAttendees] = useState("");
  const [minRecommendedAttendees, setMinRecommendedAttendees] = useState("");
  const [partyDescription, setPartyDescription] = useState();
  const [partyTypeId, setPartyTypeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post('/posts', {title, content, status, userId}, {
    //     headers: {
    //         authorization: token
    //     }
    // })
    //     .then(() => {
    //         navigate('/profile')
    //     })
    //     .catch(err => console.log(err))
    console.log(
      "submit handled",
      partyIdeaName,
      maxRecommendedAttendees,
      minRecommendedAttendees,
      partyDescription,
      partyTypeId
    );
  };

  return (
    <main>
      <form className="add-party-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Party Idea Name"
          value={partyIdeaName}
          onChange={(e) => setPartyIdeaName(e.target.value)}
          className="form-input"
        />
        <br />
        <textarea
          type="text"
          placeholder="Party Description"
          value={partyDescription}
          onChange={(e) => setPartyDescription(e.target.value)}
          className="form-input textarea"
        />
        <br />
        <input
          type="number"
          placeholder="maxRecommendedAttendees"
          value={maxRecommendedAttendees}
          onChange={(e) => setMaxRecommendedAttendees(e.target.value)}
          className="form-input"
        />
        <br />
        <input
          type="number"
          placeholder="minRecommendedAttendees"
          value={minRecommendedAttendees}
          onChange={(e) => setMinRecommendedAttendees(e.target.value)}
          className="form-input"
        />
        <br />
        <select onChange={(e) => setPartyTypeId(e.target.value)}>
          <option value="0">Dance Party</option>
          <option value="1">Dance Party but different</option>
        </select>
        <br />
        <button className="form-btn">submit</button>
      </form>
    </main>
  );
};

export default AddParty;
