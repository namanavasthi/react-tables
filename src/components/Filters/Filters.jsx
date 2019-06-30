import React from "react";

import "./Filters.css";

import FilterGroup from "../FilterGroup/FilterGroup.jsx";

export default function Filters(props) {
  const {
    filterGroups,
    title,
    handleFilterClick,
    clearAllPresent,
    handkeClearAll
  } = props;
  if (filterGroups) {
    return (
      <div className="filter-group">
        <h2 className="filter-group__title">{title}</h2>
        <div className="filter-group__current-filters">
          <ul className="selected-filters__ul">
            {filterGroups.map(filterGroup =>
              filterGroup.filters.map((filter, i) =>
                filter.checked ? (
                  <button
                    key={i}
                    onClick={() =>
                      handleFilterClick(filterGroup.prop, filter.value)
                    }
                    className="button button-auto"
                  >
                    <li className="selected-filter">{filter.name}</li>
                  </button>
                ) : (
                  ""
                )
              )
            )}
            {clearAllPresent ? (
              <span>
                <button
                  className="button button-auto"
                  onClick={() => handkeClearAll()}
                >
                  Clear All
                </button>
              </span>
            ) : (
              ""
            )}
          </ul>
        </div>
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
