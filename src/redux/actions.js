const URL = 'http://localhost:3001/api/v1'

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
   fetchingBook, fetchedBook,
  creatingBookItem, createdBookItem, updatingBookItem, updatedBookItem, deletingBookItem,
  deletedBookItem }
