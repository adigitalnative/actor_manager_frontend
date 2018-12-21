import { baseUrl } from './settings.js'

function fetchingResultOptions() {
  return(dispatch) => {
    fetch(baseUrl() + '/result_options', {
      method: "GET",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(resultOptions => {
      dispatch(updatedResultOptions(resultOptions))
    })
  }
}

function updatedResultOptions(resultOptions) {
  return {type: "UPDATED_RESULT_OPTIONS", resultOptions}
}


export { fetchingResultOptions }
