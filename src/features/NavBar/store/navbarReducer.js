const initialState = {
  number: 1,
  coordX: 0,
  coordY: 0,
}

const navbar = (state = initialState, action) => {
  switch (action.type) {
  case 'set_coords':
    return {
      ...state,
      coordX: action.payload.coordX,
      coordY: action.payload.coordY,
    }
  default:
    return state
  }
}

export default navbar
