import React, { useContext } from 'react';
import { MovieContext } from "../../App";

import './style.css';

export default ({beer, onClick}) => {
  return (
<div class="m-5" >
  <img class=" img-custom" src={beer.image_url} alt={beer.name} />
  <div class="card-body">
    <h5 class="card-title">{beer.name}</h5>
    <p class="card-text">{beer.tagline}</p>
  </div>
</div>
  );
}
