const dashboardReducer = (state={}, action) => {
  switch(action.type) {
    case "FETCHED_DASHBOARD":
      return action.dashboardData
    default:
      return state;
  }
}

export default dashboardReducer
