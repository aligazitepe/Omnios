import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Filter from '../../Components/Filter'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (filterOptions)=>() => {
    dispatch(setVisibilityFilter(filterOptions))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
