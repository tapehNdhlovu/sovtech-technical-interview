import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import { useLocation } from "react-router-dom";
import PersonView from "../../components/person-view/PersonView";

export default function Person() {
  const location = useLocation();
  return (
    <div>
      <div>
        <NavBar />
        <h4 className="homePageTitle">Details for {location.state.name} </h4>
        {location && <PersonView personDetails={location} />}
      </div>
    </div>
  );
}
