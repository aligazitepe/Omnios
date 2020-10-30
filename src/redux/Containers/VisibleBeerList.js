import { connect } from "react-redux";
import BeerList from "../../Components/BeerList/BeerList";
import { VisibilityFilters } from "../actions";

const getVisibleBeers = (beers, filter) => {
  switch (filter.type) {
    case VisibilityFilters.SHOW_ALL:
      return beers;
    case VisibilityFilters.SHOW_FILTERED:
      const { filterType, filterAmount } = filter.filterOptions;
      return beers.filter((t) => t[filterType] > filterAmount);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  beers: getVisibleBeers(state.beers, state.visibilityFilter),
});

export default connect(mapStateToProps)(BeerList);
