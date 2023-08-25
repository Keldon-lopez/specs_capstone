import React from "react";
import {Link} from 'react-router-dom'
import { supabase } from "../lib/helper/supabaseClient";

import { useDispatch } from "react-redux";
import { deleteUserSession } from "../redux/slices/userSessionSlice";

function Header(props) {
  const dispatch = useDispatch();

  let {validSession} = props

  const signOutHandler =  () =>{
    supabase.auth.signOut()
    dispatch(deleteUserSession());
  }

  return (
    <header className="header">
      <h1>Party Shuffle</h1>
      {validSession &&
      
      <nav>
          <Link to="/">
            <button className="NavButton">Home</button>
          </Link>
          <Link to="/addParty">
            <button className="NavButton">Add Party</button>
          </Link>
          {/* <Link to="/newRecipe"> */}
          {/* <button className="NavButton">Profile</button> */}
          {/* </Link> */}
          <Link to= "/">
          <button className="NavButton" onClick={signOutHandler}>Logout</button>
          </Link>
      </nav>
      }
    </header>
  );
}

export default Header;
