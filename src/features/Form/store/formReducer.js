

const initialState = {
  name: 'Xerox',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'neco':
    return {
      ...state,
    }
  default:
    return state
  }
}

export default reducer
