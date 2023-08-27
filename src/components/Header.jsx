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
      <Link to="/">
      <h1>Party Shuffle</h1>
      </Link>
      {validSession &&
      
      <nav>
          <Link to="/">
            <button className="NavButton themeBtn">Home</button>
          </Link>
          <Link to="/addParty">
            <button className="NavButton themeBtn">Add Party</button>
          </Link>
          {/* <Link to="/newRecipe"> */}
          {/* <button className="NavButton">Profile</button> */}
          {/* </Link> */}
          <Link to= "/">
          <button className="NavButton themeBtn" onClick={signOutHandler}>Logout</button>
          </Link>
      </nav>
      }
    </header>
  );
}

export default Header;
