import { baseUrl } from './settings.js'

function subscribeUser(email) {
  return(dispatch) => {
    fetch(baseUrl() + '/subscribe', {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        mailing_list_signup: {
          email: email
        }
      })
    })
    .then(response => response.json())
    .then(userData => dispatch(subscribedUser()))
  }
}

function subscribedUser() {
  return {type: "SUBSCRIBED_USER"}
}

export { subscribeUser }
