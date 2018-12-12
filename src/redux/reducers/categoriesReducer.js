const categoriesReducer = (state=[], action) => {
  switch(action.type) {
    case "FETCHED_CATEGORIES":
      return action.categories
    default:
      return state;
  }
}

export default categoriesReducer
