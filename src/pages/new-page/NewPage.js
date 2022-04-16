import React from "react";
import { usePeopleInPage } from "../../services/hooks/usePeopleInPage";
import ViewCard from "../../components/view-card/ViewCard";
import PaginationView from "../../components/pagination/PaginationView";
import NavBar from "../../components/nav-bar/NavBar";
import { useParams } from "react-router";

export default function NewPage() {
  const { pageNumber } = useParams();
  const { error, loading, data } = usePeopleInPage(pageNumber);

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <div>
      <div>
        <NavBar />
        <h4 className="homePageTitle">All people in page 4</h4>
        {data && <ViewCard dataOfAllPeople={data} />}
        <PaginationView />
      </div>
    </div>
  );
}
