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

export { fetchingAuditions, loadingAuditions, fetchedAuditions}
