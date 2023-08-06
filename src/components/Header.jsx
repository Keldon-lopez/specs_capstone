import React from "react";

function Header() {
  return (
    <header>
      <h2>Keldon's Capstone</h2>
      <nav>
          {/* <Link to=""> */}
            <button className="NavButton">Home</button>
          {/* </Link> */}
          {/* <Link to="/newRecipe"> */}
            <button className="NavButton">Add Recipe</button>
          {/* </Link> */}
          {/* <Link to="/newRecipe"> */}
          <button className="NavButton">Profile</button>
          {/* </Link> */}
      </nav>
    </header>
  );
}

export default Header;
