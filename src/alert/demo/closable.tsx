import React from 'react'
import Alert from '../alert'

export default () => (
  <div>
    <Alert message="Success Text" type="success" closable />
    <Alert message="Info Text" type="info" closable />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
      closable
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
      closable
    />
  </div>
)
