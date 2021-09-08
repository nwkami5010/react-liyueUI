import React, { FC, useState } from 'react'
import classNames from 'classnames'
import CloseOutlined from '@ant-design/icons/CloseOutlined'
import Transition from '../transition'
import '../style/index.scss';
export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
  message: string
  description?: string
  type?: AlertType
  closable?: boolean
  className?: string
  onClose?: (e: React.MouseEvent<HTMLElement,MouseEvent>)  => void
}

const Alert: FC<AlertProps> = ({
  type,
  description,
  message,
  closable,
  onClose,
}) => {
  const [closed,setClosed] = useState(false)
  const classes = classNames('l-alert', 'className', {
    [`l-alert-${type}`]: type,
  })
  const titleClass = classNames('l-alert-message')

  const handleClose = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
    setClosed(true)
    onClose?.(e)
  }

  return (
    <Transition in={!closed} timeout={300} animation="zoom-in-left">
      <div className={classes}>
        <span className={titleClass}> { message }</span>
        {description && <p className="l-alert-desc"> {description}</p>}
        {closable && (
          <span className="l-alert-close" onClick={handleClose}>
            <CloseOutlined/>
          </span>
        )}
      </div>
    </Transition>
  )
}
Alert.defaultProps = {
  type: 'warning',
  closable: false,
}
export default Alert
