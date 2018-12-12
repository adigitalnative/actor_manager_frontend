import React from 'react'
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'

const LoadingSpinner = ({message}) => {
  return(
    <Loader active inline='centered'>{message}</Loader>
  )
}

export default LoadingSpinner
