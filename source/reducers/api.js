import { CALL_API_ONE } from '../constants/ActionTypes'

const initialState = [
  {
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CALL_API_ONE:
      return [
        {

        }, 
        ...state
      ]

    default:
      return state
  }
}
