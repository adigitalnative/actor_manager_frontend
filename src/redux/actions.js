import {updatedAudition} from './actions/auditionActions'

const URL = 'http://localhost:3001/api/v1'

function fetchingCategories() {
  return(dispatch) => {
    dispatch(loadingCategories())
    fetch(URL + '/categories',{
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

function fetchingProjects() {
  return(dispatch) => {
    fetch(URL + '/projects',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(projects => {
      dispatch(fetchedProjects(projects))
    })
  }
}

function fetchedProjects(projects) {
  return {type: "FETCHED_PROJECTS", projects}
}

function fetchingCompanies() {
  return(dispatch) => {
    fetch(URL + '/companies',{
      headers: {
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(companies => {
      dispatch(fetchedCompanies(companies))
    })
  }
}

function fetchedCompanies(companies) {
  return {type: "FETCHED_COMPANIES", companies}
}


function signInAction(user, history) {
  return(dispatch) => {
    // SHould have a try/catch block here?
    fetch(URL + '/login', {
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
    fetch(URL + "/users", {
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
    fetch(URL + "/authorize",{
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

function updatingReport(report) {
  return(dispatch) => {
    fetch(URL + '/auditions/' + report.audition_id + "/report", {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ report: report })
    })
    .then(response => response.json())
    .then(audition => {
      dispatch(updatedAudition(audition))
    })
  }
}

function fetchingResultOptions() {
  return(dispatch) => {
    fetch(URL + '/result_options', {
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

function fetchingBook() {
  return(dispatch) => {
    fetch(URL + '/book', {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(bookData => {
      dispatch(fetchedBook(bookData))
    })
  }
}

function fetchedBook(bookData) {
  return { type: "FETCHED_BOOK", bookData }
}

function creatingBookItem(bookItem) {
  return(dispatch) => {
    fetch(URL + '/book', {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        book_item: bookItem
      })
    })
    .then(response => response.json())
    .then(bookItemData => {
      if (!bookItemData.error) {
        dispatch(createdBookItem(bookItemData))
      }
    })
  }
}

function createdBookItem(bookItemData) {
  return { type: "CREATED_BOOK", bookItemData }
}

function updatingBookItem(bookItem) {
  return(dispatch) => {
    fetch(URL + '/book/' + bookItem.id, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        book_item: bookItem
      })
    })
    .then(response => response.json())
    .then(bookItemData => {
      if(!bookItemData.error) {
        dispatch(updatedBookItem(bookItemData))
      }
    })
  }
}

function updatedBookItem(bookItemData) {
  return { type: "UPDATED_BOOK", bookItemData }
}

function deletingBookItem(bookItemId) {
  return(dispatch) => {
    fetch(URL + '/book/' + bookItemId, {
      method: "DELETE",
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if(!data.error) {
        dispatch(deletedBookItem(data))
      }
    })
  }
}

function deletedBookItem(bookItem) {
  return { type: "DELETED_BOOK", bookItem }
}

export { fetchingCategories, loadingCategories, fetchedCategories, fetchingProjects,
  fetchedProjects, fetchingCompanies, fetchedCompanies, signInAction, authenticatedUser,
  logoutUser, signupUser, authenticateToken,
  updatingReport, fetchingResultOptions, updatedResultOptions, fetchingBook, fetchedBook,
  creatingBookItem, createdBookItem, updatingBookItem, updatedBookItem, deletingBookItem,
  deletedBookItem }
