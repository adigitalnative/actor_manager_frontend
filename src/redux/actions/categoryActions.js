import { baseUrl } from './settings.js'

function fetchingCategories() {
  return(dispatch) => {
    dispatch(loadingCategories())
    fetch(baseUrl() + '/categories',{
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

export { fetchingCategories, loadingCategories }
