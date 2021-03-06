import React, { useContext } from 'react';
import { MovieContext } from "../../App";

import './style.css';

export default ({beer, onClick}) => {
  return (
<div class="card-custom  m-3 col-sm-4 col-md-4 col-lg-2"  >
<div className="row mt-2">
  <img class=" img-custom col-sm-6" src={beer.image_url} alt={beer.name} />
  <div class="card-body col-sm-6">
    <h5 class="card-title">{beer.name}</h5>
    <p class="card-text">{beer.tagline}</p>
  </div>
</div>
</div>
  );
}
