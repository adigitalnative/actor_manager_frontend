const messagesReducer = (state = [], action) => {
  switch(action.type) {
    case "AUTHENTICATION_ERROR":
      return [...state, action.message]
    default:
      return state
  }
}

export default messagesReducer
