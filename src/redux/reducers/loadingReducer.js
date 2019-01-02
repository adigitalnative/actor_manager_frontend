const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case "LOADING_AUDITIONS":
      return true;
    case "FETCHED_AUDITIONS":
      return false;
    case "LOADING_USER":
      return true;
    case "UPDATED_USER":
      return false;
    default:
      return state
  }
}

export default loadingReducer
