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

export { fetchingAuditions, loadingAuditions, fetchedAuditions,
  fetchingCategories, loadingCategories, fetchedCategories, fetchingProjects,
  fetchedProjects, creatingAudition}
