import { baseUrl } from './settings.js'

function updateUser(user) {
  return(dispatch) => {
    fetch(baseUrl() + '/users',{
      method: "PATCH",
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(companies => {
      dispatch(updatedUser(companies))
    })
  }
}

function updatedUser(user) {
  return {type: "UPDATED_USER", user}
}

export { updateUser }
