import React  from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { selectBeers } from "../../redux/beer/beerSlice";
import Spinner from "../Spinner";
import "./BeerList.css";

import BeerCard from "../BeerCard";
export default function Home(props) {
  const allBeers = useSelector(selectBeers);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="list_scroll">
      {allBeers.filter[0] && (
        allBeers.filter.map((beer) => <BeerCard key={beer.id} beer={beer} />)
      ) 
      }
    </div>
  );
}
