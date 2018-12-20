import { baseUrl } from './settings.js'

function fetchingDashboardData() {
  return(dispatch) => {
    fetch(baseUrl() + '/dashboard', {
      method: "GET",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`,
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(dashboardData => {
      if (!dashboardData.error) {
        dispatch(fetchedDashboardData(dashboardData))
      }
    })
  }
}

function fetchedDashboardData(dashboardData) {
  return { type: "FETCHED_DASHBOARD", dashboardData }
}

export { fetchingDashboardData }
