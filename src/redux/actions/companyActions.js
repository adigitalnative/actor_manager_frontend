import { baseUrl } from './settings.js'

function fetchingCompanies() {
  return(dispatch) => {
    fetch(baseUrl() + '/companies',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(companies => {
      dispatch(fetchedCompanies(companies))
    })
  }
}

function fetchedCompanies(companies) {
  return {type: "FETCHED_COMPANIES", companies}
}

export { fetchingCompanies }
