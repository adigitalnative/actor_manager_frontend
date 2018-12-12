import { combineReducers } from 'redux'

const placeholder_auditions = [
  {
    "id": 1,
    "bring": "Headshot and resume",
    "prepare": "1 classical 3-5 m monologue",
    "project": "King John",
    "company": "Folger Shakespeare Library",
    "category": "Invited Audition"
  },
  {
    "id": 2,
    "bring": "Headshot and resume",
    "prepare": "1 classical 3-5 m monologue",
    "project": "King John",
    "company": "Folger Shakespeare Library",
    "category": "Callback"
  }
]

const auditionsReducer = (state=placeholder_auditions, action) => {
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
