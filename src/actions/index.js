import constants from '../constants'
import { TurboClient } from '../utils'

export default {

	fetchFeeds: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('feed', params, constants.FEEDS_RECEIVED))
		}
	}
}
