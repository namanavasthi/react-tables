import React, { Component } from "react";
import orderBy from "lodash/orderBy";

import "./Controller.css";

import Table from "../Table/Table.jsx";
import Filters from "../Filters/Filters.jsx";

import AppData from "../../resources/data/table-data.json";

const mapInvertDirection = {
  asc: "desc",
  desc: "asc"
};

export default class Controller extends Component {
  state = {
    data: [],
    currData: [],
    columnToSort: "",
    sortDirection: "desc"
  };

  componentDidMount() {
    this.setState({
      data: AppData,
      currData: AppData.tableData
    });
  }

  handleSort = headingProp => {
    this.setState({
      columnToSort: headingProp,
      sortDirection:
        this.state.columnToSort === headingProp
          ? mapInvertDirection[this.state.sortDirection]
          : "asc",
      currData: orderBy(
        this.state.currData,
        headingProp,
        this.state.sortDirection
      )
    });
  };

  handleFilterClick = (filterGroup, filter) => {
    console.log(filterGroup, " : ", filter);
    // check if currData has any values within it
    let currData = this.state.currData;
    if (currData && currData.length) {
      if (Array.isArray(this.state.currData[0][filterGroup])) {
        console.log("handle array");
      } else {
        console.log("handle string");
      }
    }
  };

  render() {
    const { data, currData, sortDirection } = this.state;
    return (
      <div className="controller">
        <h1 className="controller__title">
          {data.title}
          <span> ({data.tableData ? data.tableData.length : ""})</span>
        </h1>
        <div className="controller__grid flex-container wrap">
          <Filters
            filterGroups={data.filterGroups}
            title={data.filterTitle}
            handleFilterClick={this.handleFilterClick}
          />
          <Table
            tableData={currData}
            headings={data.headings}
            sortDirection={sortDirection}
            handleSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}
