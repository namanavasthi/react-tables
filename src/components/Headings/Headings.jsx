import React from "react";

import "./Headings.css";

export default function Headings(props) {
  const { headings, handleSort } = props;

  if (headings) {
    return (
      <tr>
        {headings.map((heading, i) => (
          <td className="heading" key={i}>
            <button
              className="heading__button button"
              onClick={() => handleSort(heading.prop)}
            >
              {heading.name}
            </button>
          </td>
        ))}
      </tr>
    );
  } else {
    return <tr></tr>;
  }
}
