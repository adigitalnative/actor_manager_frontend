import { combineReducers } from 'redux'

const auditionsReducer = (oldState=[], action) => {
  return [
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
}

const rootReducer = combineReducers(
  {
    auditions: auditionsReducer
  }
)

export default rootReducer
