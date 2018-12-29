import { baseUrl } from './settings.js'

function updateUser(user) {
  return(dispatch) => {
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

function updatedUser(user) {
  return {type: "UPDATED_USER", user}
}

export { updateUser }
