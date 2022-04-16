import React from "react";
import { usePeopleInPage } from "../../services/hooks/usePeopleInPage";
import ViewCard from "../../components/view-card/ViewCard";
import PaginationView from "../../components/pagination/PaginationView";
import NavBar from "../../components/nav-bar/NavBar";
import { useParams } from "react-router";
import Loader from "../../components/loader/Loader";

export default function NewPage() {
  const { pageNumber } = useParams();
  const { error, loading, data } = usePeopleInPage(pageNumber);

  return (
    <div>
      <div>
        <NavBar />
        <h4 className="homePageTitle">All people in page {pageNumber}</h4>
        {loading && (
          <div>
            <Loader />
          </div>
        )}
        {error && <div>Something went wrong!</div>}
        {data && <ViewCard dataOfAllPeople={data} />}
        <PaginationView />
      </div>
    </div>
  );
}
