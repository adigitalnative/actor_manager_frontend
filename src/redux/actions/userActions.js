import { baseUrl } from './settings.js'

function updateUser(user) {
  return(dispatch) => {
    dispatch(loadingUser())
    fetch(baseUrl() + '/users', {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ user: user })
    })
    .then(response => response.json())
    .then(user => {
      dispatch(updatedUser(user))
    })
  }
}

function loadingUser() {
  return {type: "LOADING_USER"}
}

function updatedUser(user) {
  return {type: "UPDATED_USER", user}
}

function finishedLoading() {
  return {type: "FINISHED_LOADING"}
}

export { updateUser, loadingUser, finishedLoading }
