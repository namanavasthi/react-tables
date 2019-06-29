import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./Headings.css";

export default function Headings(props) {
  const { headings, handleSort, sortDirection } = props;
  if (headings) {
    return (
      <tr>
        {headings.map((heading, i) => (
          <td className="heading" key={i}>
            <button
              className="heading__button button"
              onClick={() => handleSort(heading.prop)}
            >
              <span className="heading__button-text">{heading.name}</span>

              <FontAwesomeIcon
                icon={faSortUp}
                color={sortDirection === "asc" ? "black" : "white"}
              />
              <FontAwesomeIcon
                icon={faSortDown}
                color={sortDirection !== "asc" ? "black" : "white"}
              />
            </button>
          </td>
        ))}
      </tr>
    );
  } else {
    return <tr></tr>;
  }
}
