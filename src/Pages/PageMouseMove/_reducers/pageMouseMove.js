export const ADD_TO_STORE = 'ADD_TO_STORE'

const initialState = {
  offsetX: null,
  offsetY: null
}

export default function PageMouseMove (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_STORE:
      return { ...state, offsetX: action.payload.offsetX, offsetY: action.payload.offsetY }
    default:
      return state
  }
}
