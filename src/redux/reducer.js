import { combineReducers } from 'redux'
import auditionsReducer from './reducers/auditionsReducer'
import loadingReducer from './reducers/loadingReducer'
import categoriesReducer from './reducers/categoriesReducer'
import projectsReducer from './reducers/projectsReducer'
import companiesReducer from './reducers/companiesReducer'
import userReducer from './reducers/userReducer'
import messagesReducer from './reducers/messageReducer'

const rootReducer = combineReducers(
  {
    auditions: auditionsReducer,
    loading: loadingReducer,
    categories: categoriesReducer,
    projects: projectsReducer,
    companies: companiesReducer,
    currentUser: userReducer,
    messages: messagesReducer
  }
)

export default rootReducer
