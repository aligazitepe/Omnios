const beers = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_BEERS':
      return [
        ...state,
       ...action.beers,
      ]
    default:
      return state
  }
}

export default beers
