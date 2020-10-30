import React, { useState } from "react";
import { VisibilityFilters } from "../../redux/actions";

import "./style.css";

export default ({ onClick }) => {
  const [filterType, setFilterType] = useState("");
  const [filterAmount, setFilterAmount] = useState("");
  const [isSelectAmountDisabled, setisSelectAmountDisabled] = useState(true);
  const filterValues = [10, 20, 30, 40, 50, 60, 70, 80];
  const filterOptions = {
    filterType,
    filterAmount,
  };
  const handleChange = (option) => (event) => {
    if (option === "filterType") {
      setFilterType(event.target.value);
      setisSelectAmountDisabled(false);
    } else if (option === "filterAmount") {
      setFilterAmount(event.target.value);
    }
  };
  const handleReset = () => {
    onClick({
      type: VisibilityFilters.SHOW_ALL,
      filterOptions: filterOptions,
    });
    setFilterType("");
    setFilterAmount("");
    setisSelectAmountDisabled(true);
  };
  return (
    <div className="row">
      <div className="input-group mb-3 mt-3 col-sm-10 m-5 input-group-custom">
        <select
          className="custom-select mt-2"
          id="inputGroupSelect01"
          value={filterType}
          onChange={handleChange("filterType")}
        >
          <option disabled value="">
            Choose filter Type...
          </option>
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
          value={filterAmount}
          onChange={handleChange("filterAmount")}
          disabled={isSelectAmountDisabled}
        >
          <option disabled value="">
            Choose Amount...
          </option>
          {filterValues.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <button
          className="btn btn-primary m-2 ml-3 mb-4"
          onClick={onClick({
            type: VisibilityFilters.SHOW_FILTERED,
            filterOptions: filterOptions,
          })}
        >
          Filter
        </button>
      </div>
      <div className="col-sm-2 m-auto">
        <button onClick={handleReset} className="btn btn-primary ">
          Clear Filter
        </button>
      </div>
    </div>
  );
};
