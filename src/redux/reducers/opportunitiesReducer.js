const opportunitiesReducer = (state=[], action) => {
  switch(action.type) {
    case "FETCHED_OPPORTUNITIES":
      return action.opportunities
    case "UPDATED_OPPORTUNITY":
      return state.map(opportunity => {
        if (opportunity.id === action.opportunity.id) {
          return action.opportunity
        } else {
          return opportunity
        }
      })
    default:
      return state;
  }
}

export default opportunitiesReducer
