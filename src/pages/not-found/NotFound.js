import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import PaginationView from "../../components/pagination/PaginationView";

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <h4 className="homePageTitle">404 - Page not found</h4>
      <PaginationView />
    </div>
  );
}
