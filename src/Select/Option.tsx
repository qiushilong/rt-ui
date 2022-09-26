import React, { FC, ReactNode, useContext, useRef, useEffect } from 'react';
import classNames from 'classnames';
import SelectContext from './SelectContext';
import { ui_name } from '../_util/constant';
import './style/option.less';

interface OptionProps {
  value: string | number | undefined; // key
  children: ReactNode; // content
  disabled?: boolean;
}

const cmp_name = `${ui_name}_select_option`;

const Option: FC<OptionProps> = (props) => {
  const { value, children, disabled } = props;
  const { selectedValue, searchValue, toggleOption } = useContext(SelectContext);

  const classes = classNames(cmp_name, {
    [`${cmp_name}_checked`]: selectedValue === value,
    [`${cmp_name}_disabled`]: disabled,
  });

  const handleClick = () => {
    if (!disabled) {
      toggleOption?.(value);
    }
  };

  console.log(value, searchValue);

  const isShow = String(value || '').includes(String(searchValue || ''));

  return isShow ? (
    <li className={classes} onClick={handleClick} title={String(value)} key={value}>
      {children}
    </li>
  ) : (
    <></>
  );
};

export default Option;
