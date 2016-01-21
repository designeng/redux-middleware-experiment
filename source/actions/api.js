import * as types from '../constants/ActionTypes'

export function callApi(endpoint) {
  return { type: types.CALL_API_ONE, endpoint }
}