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
    sortDirection: "asc"
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
          : "desc",
      currData: orderBy(
        this.state.currData,
        headingProp,
        this.state.sortDirection
      )
    });
  };

  render() {
    const { data, currData } = this.state;
    return (
      <div className="controller">
        <h1 className="controller__title">
          {data.title}
          <span> ({data.tableData ? data.tableData.length : ""})</span>
        </h1>
        <div className="controller__grid">
          <Filters />
          <Table headings={data.headings} handleSort={this.handleSort} />
          {console.log(currData)}
        </div>
      </div>
    );
  }
}
