import React from 'react';
import classnames from 'classnames';
import './Button.scss';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  theme?: 'button' | 'link' | 'text';
  size?: 'small' | 'normal' | 'big';
  level?: 'main' | 'danger' | 'normal';
  disabled?: boolean;
  loading?: Boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    size,
    level,
    disabled,
    loading,
    ...rest
  } = props;
  const classes = classnames('l-button', className, {
    [`l-theme-${theme}`]: theme,
    [`l-size-${size}`]: size,
    [`l-level-${level}`]: level,
  });
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {loading && <span className="l-loadingIndicator" />}
      {children}
    </button>
  );
};
Button.defaultProps = {
  theme: 'button',
  size: 'normal',
  level: 'normal',
  disabled: false,
  loading: false,
};

export default Button;
