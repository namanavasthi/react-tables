import React from "react";

import "./Row.css";

export default function Row(props) {
  const { row, headings } = props;
  return (
    <tr className="table__rows--row">
      {headings.map((heading, i) => (
        <td className="table__row--cell" key={i}>
          {row[heading.prop]}
        </td>
      ))}
    </tr>
  );
}
