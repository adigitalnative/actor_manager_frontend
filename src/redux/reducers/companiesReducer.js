const companiesReducer = (state=[], action) => {
  switch(action.type) {
    case "FETCHED_COMPANIES":
      return action.companies
    default:
      return state;
  }
}

export default companiesReducer
