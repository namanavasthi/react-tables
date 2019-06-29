import React, { Component } from "react";

import "./Controller.css";

import Table from "../Table/Table.jsx";

import AppData from "../../resources/data/table-data.json";

export default class Controller extends Component {
  state = {
    data: [],
    currData: []
  };

  componentDidMount() {
    this.setState({
      data: AppData,
      currData: AppData
    });
  }

  render() {
    const { data, currData } = this.state;
    return (
      <div className="controller">
        <h1 className="controller__title">
          {data.title}
          <span> ({currData.tableData ? currData.tableData.length : ""})</span>
        </h1>
        <Table />
      </div>
    );
  }
}
