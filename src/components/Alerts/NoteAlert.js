import React from 'react'
import Alert from './Alert'

export const NoteAlert = ({ title = "Please note", children, ...rest }) => (
  <Alert className="bc-alert-note" {...rest} >
    {title && <h2 className="alert-title">{title}</h2>}
    {children}
  </Alert>
)

NoteAlert.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.any.isRequired
}

export default NoteAlert
