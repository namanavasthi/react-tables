import React, { Component } from "react";
import orderBy from "lodash/orderBy";
import _ from "lodash";

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
    sortDirection: "desc",
    applyFilters: []
  };

  componentDidMount() {
    this.setState({
      data: AppData,
      currData: AppData.tableData
    });
  }

  generateFilters = (applyFilters, filterGroup, filter) => {
    if (applyFilters[filterGroup] === undefined) {
      applyFilters[filterGroup] = [filter];
    } else {
      // check unique
      if (applyFilters[filterGroup].includes(filter)) {
        applyFilters[filterGroup] = applyFilters[filterGroup].filter(
          eachfilter => eachfilter !== filter
        );
      } else {
        applyFilters[filterGroup].push(filter);
      }
    }
    return applyFilters;
  };

  generateFilteredData = (applyFilters, originalData, currFilteredData) => {
    Object.keys(applyFilters).forEach(function(key) {
      if (Array.isArray(originalData[0][key])) {
        if (applyFilters[key].length > 0) {
          currFilteredData = _.filter(currFilteredData, function(o) {
            return _.intersection(o[key], applyFilters[key]).length > 0;
          });
        }
      } else {
        applyFilters[key].forEach(value => {
          currFilteredData = _.filter(currFilteredData, [key, value]);
        });
      }
    });
    return currFilteredData;
  };

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
    let { applyFilters, currData } = this.state;
    let currFilteredData = this.state.data.tableData;
    let originalData = this.state.data.tableData;

    applyFilters = this.generateFilters(applyFilters, filterGroup, filter);

    if (currData !== undefined) {
      currFilteredData = this.generateFilteredData(
        applyFilters,
        originalData,
        currFilteredData
      );

      this.setState({
        currData: currFilteredData
      });
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
