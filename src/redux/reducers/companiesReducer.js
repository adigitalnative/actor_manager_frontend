const companiesReducer = (state=[], action) => {
  switch(action.type) {
    case "FETCHED_COMPANIES":
      return action.companies
    case "UPDATED_COMPANY":
      return state.map(company => {
        if (company.id === action.company.id) {
          return action.company
        } else {
          return company
        }
      })
    default:
      return state;
  }
}

export default companiesReducer
