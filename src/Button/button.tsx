import React, { FC } from 'react';
import classNames from 'classnames';
import '../style/index.scss';

const isString = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <span>{children}</span>
  }
  return children
}
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

  disabled?: boolean
  loading?: boolean
  block?: boolean
  className?: string
  href?: string

  children?: React.ReactNode
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes
  target?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BasicButtonProps &  //交叉类型
  Omit<React.ButtonHTMLAttributes<HTMLElement>,'type'>

type AnchorButtonProps = {
  href?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BasicButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>,'type'>
///Partial 可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> =({
  type,
  size,

  disabled,
  loading,
  block,
  className,
  href,

  children,
  htmlType,
  ...restProps
                                }) =>{
  const classes = classNames('l-btn',className,{ // className 用户自定义
    [`l-btn-${type}`]: type,
    [`l-btn-${size}`]: size,
    'l-btn-loading':loading,
    'l-btn-block': block,
  })

  if(type === 'link' && href) {
    return (
      <a className={classes} href={href}{...restProps}>
        {children}
      </a>
    )
  }
  const kids = isString(children)
  return (
    <button
      type={htmlType}
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {kids}

      </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'md',
  block: false,
  loading: false,
  htmlType: 'button'as ButtonProps['htmlType'],

}
export default Button
