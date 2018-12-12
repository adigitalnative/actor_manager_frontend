import { combineReducers } from 'redux'

const auditionsReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCHED_AUDITIONS":
      return action.auditions
    default:
      return state;
  }
}

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case "LOADING_AUDITIONS":
      return true;
    case "FETCHED_AUDITIONS":
      return false;
    default:
      return state
  }
}

const rootReducer = combineReducers(
  {
    auditions: auditionsReducer
  }
)

export default rootReducer
