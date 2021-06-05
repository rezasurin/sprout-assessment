const initialState = {
  data: [],
}

export default function contactReducer (state = initialState, action) {
  const {type, payload} = action

  switch (type) {
    case 'contact/setContact':
      // console.log(payload)
      return {...state, data: payload}
    default:
      return state
  }
}