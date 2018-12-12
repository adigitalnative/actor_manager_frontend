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

export { fetchingAuditions, loadingAuditions, fetchedAuditions,
  fetchingCategories, loadingCategories, fetchedCategories}
