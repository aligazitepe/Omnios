import React from "react";

import "./style.css";

export default ({ beer }) => {
  return (
    <div class="card  m-3 col-4 col-sm-4 col-md-3 col-lg-2">
      <div className="row-sm-4 mt-5  ">
        <img
          class="img img-fluid img-custom  "
          src={beer.image_url}
          alt={beer.name}
        />
        <div class="card-body col-sm-12">
          <h5 class="card-title">{beer.name}</h5>
          <p class="card-text">{beer.tagline}</p>
        </div>
      </div>
    </div>
  );
};
