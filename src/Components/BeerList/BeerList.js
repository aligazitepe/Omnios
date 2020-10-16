import React from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { selectBeers } from "../../redux/beer/beerSlice";
import "./BeerList.css";

import BeerCard from "../BeerCard";
export default function Home(props) {
  const allBeers = useSelector(selectBeers);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={1000} classNames="my-node">
      <div className="list_scroll">
        {allBeers.value &&
          allBeers.value.map((beer) => <BeerCard key={beer.id} beer={beer} />)}
      </div>
    </CSSTransition>
  );
}
