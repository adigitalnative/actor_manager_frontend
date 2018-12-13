const projectsReducer = (state=[], action) => {
  switch(action.type) {
    case "FETCHED_PROJECTS":
      return action.projects
    default:
      return state;
  }
}

export default projectsReducer
