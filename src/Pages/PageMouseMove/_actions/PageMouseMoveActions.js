import { ADD_TO_STORE } from '../_reducers/pageMouseMove'

export function addToStore (data) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_STORE,
      payload: data
    })
  }
}
