const URL = 'http://localhost:3001/api/v1'
// const URL = 'http://10.113.110.102:3001/api/v1'

function fetchingAuditions() {
  return(dispatch) => {
    dispatch(loadingAuditions())
    fetch(URL + '/auditions',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
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
    fetch(URL + '/categories',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
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
    fetch(URL + '/projects',{
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

function fetchingCompanies() {
  return(dispatch) => {
    fetch(URL + '/companies',{
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

function addedAudition(audition) {
  return {type: "ADDED_AUDITION", audition}
}

function creatingAudition(audition) {
  return(dispatch) => {
    fetch(URL + '/auditions', {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
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
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
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

function signInAction(user, history) {
  return(dispatch) => {
    // SHould have a try/catch block here?
    fetch(URL + '/login', {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({ user: user })
    })
    .then(response => response.json())
    .then(data => {
      if (!data.error) {
        localStorage.setItem('token', data.token)
        dispatch(authenticatedUser(data.user))
      } else {
        dispatch(authenticationError(data.message))
      }
    })
  }
}

function authenticationError(message) {
  localStorage.removeItem('token')
  return {type: "AUTHENTICATION_ERROR", message: message}
  // this should probably do something else... set something in state to display to user perhaps?
}

function authenticatedUser(user) {
  return {type: "AUTHENTICATED_USER", user}
}

function logoutUser() {
  localStorage.removeItem('token')
  return {type: "LOGOUT_USER"}
}

function signupUser(user) {
  return(dispatch) => {
    fetch(URL + "/users", {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
       },
      body: JSON.stringify({ user: user})
    })
    .then(response => response.json())
    .then(data => {
      if (!data.error) {
        localStorage.setItem('token', data.token)
        dispatch(authenticatedUser(data.user))
      } else {
        dispatch(authenticationError(data.message))
      }
    })
  }
}

function authenticateToken(token) {
  return(dispatch) => {
    fetch(URL + "/authorize",{
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (!data.error) {
        localStorage.setItem('token', data.token)
        dispatch(authenticatedUser(data.user))
      } else {
        dispatch(authenticationError(data.message))
      }
    })
  }
}

export { fetchingAuditions, loadingAuditions, fetchedAuditions,
  fetchingCategories, loadingCategories, fetchedCategories, fetchingProjects,
  fetchedProjects, creatingAudition, deleteAudition, deletedAudition,
  fetchingCompanies, fetchedCompanies, signInAction, authenticatedUser,
  logoutUser, signupUser, authenticateToken }
