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
    // case "AUTHENTICATED_USER":
    //   return false
    case "LOADING_OPPORTUNITIES":
      return true
    case "FETCHED_OPPORTUNITIES":
      return false
    case "SAVING_AUDITION":
      return true
    case "ADDED_AUDITION":
      return false
    default:
      return state
  }
}

export default loadingReducer
