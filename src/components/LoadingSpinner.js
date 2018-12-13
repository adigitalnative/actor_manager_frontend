import React from 'react'
import { Loader } from 'semantic-ui-react'

const LoadingSpinner = ({message}) => {
  return(
    <Loader active inline='centered'>{message}</Loader>
  )
}

export default LoadingSpinner
