const URL = 'http://localhost:3001/api/v1'

function fetchingAuditions() {
  return(dispatch) => {
    dispatch(loadingAuditions())
    fetch(URL + '/auditions')
    .then(response => response.json())
    .then(auditions => {
      dispatch(fetchedAuditions(auditions))
    })
  }
}

function loadingAuditions() {
  return {type: "LOADING_AUDITIONS"}
}

function fetchedAuditions(auditions) {
  return {type: "FETCHED_AUDITIONS", auditions}
}

function fetchingCategories() {
  return(dispatch) => {
    dispatch(loadingCategories())
    fetch(URL + '/categories')
    .then(response => response.json())
    .then(categories => {
      dispatch(fetchedCategories(categories))
    })
  }
}

function fetchedCategories(categories) {
  return {type: "FETCHED_CATEGORIES", categories}
}

function loadingCategories() {
  return {type: "LOADING_CATEGORIES"}
}

function fetchingProjects() {
  return(dispatch) => {
    fetch(URL + '/projects')
    .then(response => response.json())
    .then(projects => {
      dispatch(fetchedProjects(projects))
    })
  }
}

function fetchedProjects(projects) {
  return {type: "FETCHED_PROJECTS", projects}
}

function fetchingCompanies() {
  return(dispatch) => {
    fetch(URL + '/companies')
    .then(response => response.json())
    .then(companies => {
      dispatch(fetchedCompanies(companies))
    })
  }
}

function fetchedCompanies(companies) {
  return {type: "FETCHED_COMPANIES", companies}
}

function addedAudition(audition) {
  return {type: "ADDED_AUDITION", audition}
}

function creatingAudition(audition) {
  return(dispatch) => {
    fetch(URL + '/auditions', {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({audition: audition})
    })
    .then(response => response.json())
    .then(audition => {
      dispatch(addedAudition(audition))
    })
  }
}

function deleteAudition(audition_id) {
  const str = URL + '/auditions/' + audition_id
  return(dispatch) => {
    fetch(str, {
      method: "DELETE",
      headers: {
        'Accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(audition => {
      dispatch(deletedAudition(audition))
    })
  }
}

function deletedAudition(audition) {
  return {type: "DELETED_AUDITION", audition}
}

export { fetchingAuditions, loadingAuditions, fetchedAuditions,
  fetchingCategories, loadingCategories, fetchedCategories, fetchingProjects,
  fetchedProjects, creatingAudition, deleteAudition, deletedAudition,
  fetchingCompanies, fetchedCompanies }
