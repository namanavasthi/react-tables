import React from "react";
import Row from "../Row/Row.jsx";

import "./TableRows.css";

export default function TableRows(props) {
  const { data, headings } = props;
  return (
    <tbody className="table__rows">
      {data.map((row, i) => (
        <Row key={i} row={row} headings={headings} />
      ))}
    </tbody>
  );
}
