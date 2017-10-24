import constants from '../constants'

var initialState = {
  all: null,
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {

    case constants.FEEDS_RECEIVED:
      newState['all'] = action.data
      return newState

    case constants.FEEDS_CREATED:

      let all = (newState.all) ? Object.assign([], newState.all) : []
      all.unshift(action.data)
      newState['all'] = all
      return newState

    default:
      return state
  }
}