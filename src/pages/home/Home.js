import React from "react";
import "./Home.css";
import ViewCard from "../../components/view-card/ViewCard";
import NavBar from "../../components/nav-bar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h4 className="homePageTitle">
        All people (https://swapi.dev/api/people/){" "}
      </h4>
      <ViewCard />
    </div>
  );
}
