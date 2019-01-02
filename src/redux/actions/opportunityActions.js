import { baseUrl } from './settings.js'

function fetchOpportunities() {
  return(dispatch) => {
    dispatch(loadingOpportunities())
    fetch(baseUrl() + '/opportunities', {
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(opportunities => {
      dispatch(fetchedOpportunities(opportunities))
    })
  }
}

function fetchedOpportunities(opportunities) {
  return {type: "FETCHED_OPPORTUNITIES", opportunities}
}

function loadingOpportunities() {
  return {type: "LOADING_OPPORTUNITIES"}
}

function archiveLead(lead) {
  return(dispatch) => {
    fetch(baseUrl() + '/opportunities/' + lead.opportunity.id + "/archive", {
      method: "PATCH",
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(opportunity => dispatch(updatedOpportunity(opportunity)))
  }
}

function updatedOpportunity(opportunity) {
  return {type: "UPDATED_OPPORTUNITY", opportunity}
}

export { fetchOpportunities, archiveLead }
