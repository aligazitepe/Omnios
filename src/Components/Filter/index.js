import React from "react";

import "./style.css";

export default ({
  handleChange,
  filterFunctions,
  filterType,
  filterAmount,
}) => {
  const filterValues = [10, 20, 30, 40, 50, 60, 70, 80];
  return (
    <div className="row">
      <div className="input-group mb-3 mt-3 col-sm-10 m-5 input-group-custom">
        <select
          className="custom-select mt-2"
          id="inputGroupSelect01"
          onChange={handleChange(filterFunctions.setFilterType)}
          value={filterType}
        >
          <option disabled value="">Choose filter Type...</option>
          <option value="abv" key="abv">
            ABV{" "}
          </option>
          <option value="ibu" key="ibu">
            IBU{" "}
          </option>
        </select>
        <h1 className="ml-2 mr-2">{">"}</h1>
        <select
          className="custom-select mt-2"
          id="inputGroupSelect02"
          onChange={handleChange(filterFunctions.setFilterAmount)}
          value={filterAmount}
        >
          <option disabled value="">Choose Amount...</option>
          {filterValues.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="col-sm-2 m-auto">
        <button
          className="btn btn-primary "
          onClick={filterFunctions.resetFilter}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};
