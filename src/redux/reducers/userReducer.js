const userReducer = (state=false, action) => {
  switch(action.type) {
    case "AUTHENTICATED_USER":
      return action.user
    case "UPDATED_USER":
      return action.user
    case "LOGOUT_USER":
      return false
    default:
      return state
  }
}

export default userReducer
