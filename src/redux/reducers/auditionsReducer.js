const auditionsReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCHED_AUDITIONS":
      return action.auditions
    case "ADDED_AUDITION":
      return [...state, action.audition]
    default:
      return state;
  }
}

export default auditionsReducer
