import React, { useState } from "react";
import "./Home.css";
import ViewCard from "../../components/view-card/ViewCard";
import NavBar from "../../components/nav-bar/NavBar";
import { useGetAllPeople } from "../../services/hooks/useGetAllPeople";

export default function Home() {
  //const [peopleData, setPeopleData] = useState();
  const { error, loading, data } = useGetAllPeople();

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>Something went wrong!</div>;
  //setPeopleData(data);
  //console.log(data);
  return (
    <div>
      <NavBar />
      <h4 className="homePageTitle">
        All people (https://swapi.dev/api/people/){" "}
      </h4>
      {data && <ViewCard dataOfAllPeople={data} />}
    </div>
  );
}
