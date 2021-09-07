import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './Switch.scss';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
}

const Switch: React.FC<Props> = (props) => {
  const { className, style, disabled, defaultValue, onChange, loading } = props;
  const [checked, setChecked] = useState(defaultValue || false);
  const classNames = classnames('l-switch', className, {
    'l-switch-checked': checked,
    disabled: disabled,
  });

  useEffect(() => {
    if (props.onChange) props.onChange(checked);
  }, [checked]);
  const handleClick = () => {
    if (disabled) return;
    setChecked(!checked);
  };
  return (
    <div className={classNames} style={style} onClick={handleClick}>
      <div className="l-switch-toggle-wrapper">
        <div className="l-switch-toggle">
          {loading && <span className="l-loadingIndicator" />}
        </div>
      </div>
    </div>
  );
};
Switch.defaultProps = {
  loading: false,
  disabled: false,
};
export default Switch;
