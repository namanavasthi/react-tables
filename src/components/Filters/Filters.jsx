import React from "react";

import "./Filters.css";

import FilterGroup from "../FilterGroup/FilterGroup.jsx";

export default function Filters(props) {
  const { filterGroups, title, handleFilterClick } = props;
  if (filterGroups) {
    return (
      <div className="filter-group">
        <h2 className="filter-group__title">{title}</h2>
        {filterGroups.map((filterGroup, i) => (
          <FilterGroup
            data={filterGroup}
            key={i}
            handleFilterClick={(filterGroup, filter) =>
              handleFilterClick(filterGroup, filter)
            }
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="filter-group">
        <h2 className="filter-group__title">{title}</h2>
      </div>
    );
  }
}
