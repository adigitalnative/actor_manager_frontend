const buildHistogram = letterArray => {
  let histogram = {}
  for(const letter of letterArray) {
    histogram[letter] ? histogram[letter] = histogram[letter] + 1 : histogram[letter] = 1
  }
  return histogram
}


const canBuildNote = (letterArray, noteText) => {
  debugger
  // histogram = buildHistogram(letterArray)
  // for(letter of noteText)
}
