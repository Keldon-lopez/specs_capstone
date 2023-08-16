import React from "react";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <h2>Keldon's Capstone</h2>
      <nav>
          <Link to="">
            <button className="NavButton">Home</button>
          </Link>
          <Link to="/addParty">
            <button className="NavButton">Add Party</button>
          </Link>
          {/* <Link to="/newRecipe"> */}
          <button className="NavButton">Profile</button>
          {/* </Link> */}
      </nav>
    </header>
  );
}

export default Header;
