import React, { useState } from "react";
import "./Home.css";
import ViewCard from "../../components/view-card/ViewCard";
import NavBar from "../../components/nav-bar/NavBar";
import { useGetAllPeople } from "../../services/hooks/useGetAllPeople";
import PaginationView from "../../components/pagination/PaginationView";
import Loader from "../../components/loader/Loader";

export default function Home() {
  //const [peopleData, setPeopleData] = useState();
  const { error, loading, data } = useGetAllPeople();

  //setPeopleData(data);
  //console.log(data);
  return (
    <div>
      <NavBar />
      <h4 className="homePageTitle">All people</h4>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Something went wrong!</div>}
      {data && <ViewCard dataOfAllPeople={data} />}
      <PaginationView />
    </div>
  );
}
