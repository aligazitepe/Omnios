export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setBeers = beers => ({
  type: 'SET_ALL_BEERS',
  beers
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FILTERED: 'SHOW_FILTERED',

}
