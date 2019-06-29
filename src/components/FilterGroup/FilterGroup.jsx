import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import FilterList from "../FilterList/FilterList.jsx";

import "./FilterGroup.css";

const mapIcon = {
  "+": faPlus,
  "-": faMinus
};

export default class FilterGroup extends Component {
  state = {
    icon: "-"
  };

  invertIcon = () => {
    this.state.icon === "+"
      ? this.setState({ icon: "-" })
      : this.setState({ icon: "+" });
  };

  render() {
    const { data, handleFilterClick } = this.props;

    return (
      <ul className="filter-group__ul">
        <li className="filter-group__li--title icon--relative">
          <button className="button" onClick={this.invertIcon}>
            {data.groupTitle}
          </button>
          <FontAwesomeIcon
            className="icon--right icon__margin icon--absolute"
            icon={mapIcon[this.state.icon]}
          />
          <ul
            className={
              this.state.icon === "-"
                ? "filter-group__list filter-group__list--show"
                : "filter-group__list filter-group__list--hide"
            }
          >
            <FilterList
              filters={data.filters}
              handleFilterClick={filter => handleFilterClick(data.prop, filter)}
            />
          </ul>
        </li>
      </ul>
    );
  }
}
