import React from "react";

import "./Table.css";

import Headings from "../Headings/Headings.jsx";

export default function Table(props) {
  const { headings, handleSort } = props;
  return (
    <table className="table">
      <thead>
        <Headings headings={headings} handleSort={handleSort} />
      </thead>
    </table>
  );
}
