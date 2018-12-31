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

function updateCompany(company) {
  return(dispatch) => {
    fetch(baseUrl() + '/companies/' + company.id, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        company: company
      })
    })
    .then(response => response.json())
    .then(companyData => {
      if(!companyData.error) {
        dispatch(updatedCompany(companyData))
      }
    })
  }
}

function updatedCompany(company) {
  return {type: "UPDATED_COMPANY", company}
}

export { fetchingCompanies, updateCompany, updatedCompany }
