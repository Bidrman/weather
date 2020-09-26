import { FORM_ACTION1, FORM_ACTION2, FORM_ACTION3 } from './actions'

const initialState = {
  name: 'Xerox',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FORM_ACTION1:
    return {
      ...state,
    }
  default:
    return state
  }
}

export default reducer
