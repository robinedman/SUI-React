import React from 'react'
import Alert from './Alert'

export const NewsAlert = ({ children, ...rest }) => (
  <Alert className="bc-alert-news" {...rest} >
    {children}
  </Alert>
)

NewsAlert.propTypes = {
  onDismiss: React.PropTypes.func.isRequired
}

export default NewsAlert