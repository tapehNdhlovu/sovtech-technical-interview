import * as React from "react";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function PaginationView() {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  let defined = true;
  if (pageNumber === undefined) {
    defined = false;
  }

  const [active, setActive] = useState(defined ? pageNumber : 0);

  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const setActivePage = (item) => {
    let page = item + 1;
    if (page === 1 && defined === false) {
    } else {
      navigate(`/page/${page}`);
    }

    setActive(page);
  };

  return (
    <div className="d-flex justify-content-center">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <Pagination onClick={() => setActivePage(i)}>{item}</Pagination>
          </div>
        );
      })}
    </div>
  );
}
