import { baseUrl } from './settings.js'

function signInAction(user, history) {
  return(dispatch) => {
    // SHould have a try/catch block here?
    fetch(baseUrl() + '/login', {
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
    fetch(baseUrl() + "/users", {
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
    fetch(baseUrl() + "/authorize",{
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

export {signInAction, logoutUser, signupUser, authenticateToken}
