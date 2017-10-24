import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {

    case constants.RSS_FEED_RECEIVED:
      return newState

    default:
      return state
  }
}