import { baseUrl } from './settings.js'

function fetchingAuditions() {
  return(dispatch) => {
    dispatch(loadingAuditions())
    fetch(baseUrl() + '/auditions',{
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

function addedAudition(audition) {
  return {type: "ADDED_AUDITION", audition}
}

function creatingAudition(audition) {
  return(dispatch) => {
    fetch(baseUrl() + '/auditions', {
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

function createAuditionFromOpportunity(audition) {
  return(dispatch) => {
    fetch(baseUrl() + '/auditions', {
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

function updatingAudition(audition) {
  return(dispatch) => {
    fetch(baseUrl() + '/auditions/' + audition.id, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({audition: audition})
    })
    .then(response => response.json())
    .then(audition => {
      dispatch(updatedAudition(audition))
    })
  }
}

function updatedAudition(audition) {
  return {type: "UPDATED_AUDITION", audition}
}

function deleteAudition(audition_id) {
  const str = baseUrl() + '/auditions/' + audition_id
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


export { fetchingAuditions, loadingAuditions, creatingAudition, updatingAudition, deleteAudition, updatedAudition, createAuditionFromOpportunity }
