const resultOptionsReducer = (state=[], action) => {
  switch(action.type) {
    case "UPDATED_RESULT_OPTIONS":
      return action.resultOptions
    default:
      return state;
  }
}

export default resultOptionsReducer
