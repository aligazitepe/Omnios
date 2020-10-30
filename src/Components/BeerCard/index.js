import React from "react";

import "./style.css";

export default ({ beer }) => {
  return (
    <div className="card m-3 mb-5 mt-5 col-6 col-sm-3 col-lg-2">
      <div className="row-sm-4 mt-5">
        <img
          className="img img-fluid img-custom "
          src={beer.image_url}
          alt={beer.name}
        />
        <div className="card-body col-sm-12">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">{beer.tagline}</p>
        </div>
      </div>
    </div>
  );
};
