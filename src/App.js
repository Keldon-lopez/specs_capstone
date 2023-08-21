import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainDisplay from "./components/MainDisplay";
import AddParty from "./components/AddParty";
import Login from "./components/Login";
import { selectUserSession } from "./redux/slices/userSessionSlice";

function App() {
  let currentUserSession = useSelector(selectUserSession)
  let {value} = currentUserSession

  return (
    <div className="App">
      <Header validSession={value}/>
      <Routes>
        <Route path="/" element={value ? <MainDisplay/> : <Login />} />
        <Route path="/addParty" element={<AddParty />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
