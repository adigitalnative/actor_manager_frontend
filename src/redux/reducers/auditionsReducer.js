const auditionsReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCHED_AUDITIONS":
      return action.auditions
    case "ADDED_AUDITION":
      return [...state, action.audition]
    case "DELETED_AUDITION":
      return state.filter(audition => audition.id !== action.audition.id)
    default:
      return state;
  }
}

export default auditionsReducer
