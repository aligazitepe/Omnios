import React from "react";

import "./style.css";

export default ({ resetFilter, setFilter, handleChange }) => {
  const filterValues = [10, 20, 30, 40, 50, 60, 70, 80];
  return (
    <div className="row">
      <div class="input-group mb-3 mt-3 col-sm-10 m-5 input-group-custom">
        <select
          class="custom-select mt-2"
          id="inputGroupSelect01"
          onChange={handleChange("type")}
        >
          <option selected disabled>
            Choose filter Type...
          </option>
          <option value="abv">ABV </option>
          <option value="ibu">IBU </option>
        </select>
        <h1 className="ml-2 mr-2">{">"}</h1>
        <select
          class="custom-select mt-2"
          id="inputGroupSelect02"
          onChange={handleChange("amount")}
        >
          <option selected disabled>
            Choose Amount...
          </option>
          {filterValues.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <button class="btn btn-primary ml-3 mt-2 mb-2" onClick={setFilter}>
          Filter
        </button>
      </div>
      <div className="col-sm-2 m-auto">
        <button class="btn btn-primary " onClick={resetFilter}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};
