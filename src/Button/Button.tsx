import React, { FC } from 'react';
import classNames from 'classnames';
import '../style'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dashed'
  | 'link'
  | 'text'

export type ButtonSize = 'lg' | 'md' | 'sm'
export type ButtonShape = 'circle' | 'round'
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset'

interface BasicButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
  loading?: boolean
  block?: boolean
  className?: string
  href?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes
  target?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BasicButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>,'type'>

type AnchorButtonProps = {
  href?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BasicButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>,'type'>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> =({
  type,
  size,
  shape,
  disabled,
  loading,
  block,
  className,
  href,
  icon,
  children,
  htmlType,
  ...restProps
                                }) =>{
  const classes = classNames('mk-btn',className,{
    [`mk-btn-${type}`]: type,
    [`mk-btn-${size}`]: size,
    [`mk-btn-${shape}`]: shape,
    'mk-btn-loading':loading,
    'mk-btn-block': block,
    'mk-btn-icon-only': icon,
  })

  if(type === 'link' && href) {
    return (
      <a className={classes} href={href}{...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button
      type={htmlType}
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {icon}
      {children}
      </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'md',
  block: false,
  loading: false,
  htmlType: 'button',
  icon: null,
}
export default Button
