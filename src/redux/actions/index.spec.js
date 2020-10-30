import * as actions from './index'

describe('todo actions', () => {
  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter({type:'active'})).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

})
