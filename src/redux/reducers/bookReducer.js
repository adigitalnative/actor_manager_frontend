const categoriesReducer = (state=[], action) => {
  switch(action.type) {
    case "FETCHED_BOOK":
      return action.bookData
    case "CREATED_BOOK":
      return [...state, action.bookItemData]
    case "UPDATED_BOOK":
      return state.map(bookItem => {
        if(bookItem.id === action.bookItemData.id) {
          return action.bookItemData
        } else {
          return bookItem
        }
      })
    case "DELETED_BOOK":
      return state.filter(bookItem => bookItem.id !== action.bookItem.id)
    default:
      return state;
  }
}

export default categoriesReducer
