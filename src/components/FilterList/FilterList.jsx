import React from "react";

import "./FilterList.css";

export default function FilterList(props) {
  const { filters, handleFilterClick } = props;
  return (
    <li className="filter-list">
      {filters.map((filter, i) => (
        <button
          className="button filter-list__item"
          key={i}
          onClick={() => handleFilterClick(filter.value)}
        >
          {filter.name}
        </button>
      ))}
    </li>
  );
}
