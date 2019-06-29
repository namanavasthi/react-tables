import React from "react";

import "./Table.css";

import Headings from "../Headings/Headings.jsx";
import TableRows from "../TableRows/TableRows.jsx";

export default function Table(props) {
  const { headings, handleSort, sortDirection, tableData } = props;
  return (
    <table className="table">
      <thead>
        <Headings
          headings={headings}
          handleSort={handleSort}
          sortDirection={sortDirection}
        />
      </thead>
      <TableRows data={tableData} headings={headings} />
    </table>
  );
}
