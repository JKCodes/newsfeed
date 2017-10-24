import constants from '../constants'
import { TurboClient } from '../utils'

export default {

	fetchFeeds: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('feed', params, constants.FEEDS_RECEIVED))
		}
	},

  createFeed: (params) => {
    return dispatch => {
      return dispatch(TurboClient.postRequest('feed', params, constants.FEEDS_CREATED))
    }
  }  
}
