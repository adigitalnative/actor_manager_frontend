import { combineReducers } from 'redux'
import auditionsReducer from './reducers/auditionsReducer'
import loadingReducer from './reducers/loadingReducer'
import categoriesReducer from './reducers/categoriesReducer'
import projectsReducer from './reducers/projectsReducer'
import companiesReducer from './reducers/companiesReducer'

const rootReducer = combineReducers(
  {
    auditions: auditionsReducer,
    loading: loadingReducer,
    categories: categoriesReducer,
    projects: projectsReducer,
    companies: companiesReducer
  }
)

export default rootReducer
