import * as types from '../constants/ActionTypes'

export function callApi(url) {
  return { type: types.CALL_API_ONE, url }
}