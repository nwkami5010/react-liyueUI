import React from 'react';
import classnames from 'classnames';
import './Button.scss';

type ButtonTheme = 'button' | 'link' | 'text';
type ButtonSize = 'small' | 'normal' | 'big';
type ButtonLevel = 'main' | 'danger' | 'normal';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  level?: ButtonLevel;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = 'button',
    size = 'normal',
    level = 'normal',
    disabled = false,
    loading = false,
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

export default Button;
