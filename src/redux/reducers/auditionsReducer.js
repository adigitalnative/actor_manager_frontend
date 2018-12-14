const auditionsReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCHED_AUDITIONS":
      return action.auditions
    case "ADDED_AUDITION":
      return [...state, action.audition]
    case "DELETED_AUDITION":
      return state.filter(audition => audition.id !== action.audition.id)
    case "UPDATED_AUDITION":
      let newState = state.map(oldAudition => {
        if (oldAudition.id === action.audition.id) {
          return action.audition
        }
        return oldAudition
      })
      return newState;
    default:
      return state;
  }
}

export default auditionsReducer
