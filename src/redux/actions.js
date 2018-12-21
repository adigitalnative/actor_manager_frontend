import {updatedAudition} from './actions/auditionActions'

const URL = 'http://localhost:3001/api/v1'

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

export { 
  updatingReport, fetchingResultOptions, updatedResultOptions, fetchingBook, fetchedBook,
  creatingBookItem, createdBookItem, updatingBookItem, updatedBookItem, deletingBookItem,
  deletedBookItem }
