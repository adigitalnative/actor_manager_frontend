import { baseUrl } from './settings.js'


function fetchingProjects() {
  return(dispatch) => {
    fetch(baseUrl() + '/projects',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(projects => {
      dispatch(fetchedProjects(projects))
    })
  }
}

function fetchedProjects(projects) {
  return {type: "FETCHED_PROJECTS", projects}
}

export { fetchingProjects }
