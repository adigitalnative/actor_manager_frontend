const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case "LOADING_AUDITIONS":
      return true;
    case "FETCHED_AUDITIONS":
      return false;
    default:
      return state
  }
}

export default loadingReducer
