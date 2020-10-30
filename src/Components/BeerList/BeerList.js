import React from "react";
import Spinner from "../Spinner";
import "./BeerList.css";


import BeerCard from "../BeerCard";
const BeerList = ({ beers }) => {
  return (
    <div>
      {beers && beers.length ? (
        <div className="list_scroll">
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};


export default BeerList;
