const subscriberReducer = (state=false, action) => {
  switch(action.type) {
    case "SUBSCRIBED_USER":
      return true
    default:
      return state;
  }
}

export default subscriberReducer
