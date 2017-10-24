import constants from '../constants'
import { TurboClient, HTTP } from '../utils'

const getRequest = (endpoint, params, actionType) => {
  return dispatch => HTTP.get(endpoint, params)
    .then(data => {
      if (actionType != null){
        dispatch({
          type: actionType,
          params: params, // can be null
          data: data
        })
      }
      
      return data
    })
    .catch(err => {
      throw err
    })
}

export default {

  selectFeed: (feed) => {
    return {
      type: constants.SELECT_FEED,
      data: feed
    }
  },

	fetchFeeds: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('feed', params, constants.FEEDS_RECEIVED))
		}
	},

  createFeed: (params) => {
    return dispatch => {
      return dispatch(TurboClient.postRequest('feed', params, constants.FEEDS_CREATED))
    }
  },

  fetchRssFeed: (url, params) => {
    return dispatch => {
      return dispatch(getRequest(url, params, constants.RSS_FEED_RECEIVED))
    }
  }  
}
