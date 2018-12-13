const messagesReducer = (state = [], action) => {
  switch(action.type) {
    case "AUTHENTICATION_ERROR":
      return [...state, action.message]
      console.log(action.message)
      return state;
    default:
      return state
  }
}

export default messagesReducer
