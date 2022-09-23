import React, { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import SelectContext from './SelectContext';
import { ui_name } from '../_util/constant';
import './style/option.less';

interface OptionProps {
  value: string | number | undefined;
  children: string;
}

const cmp_name = `${ui_name}_select_option`;

const Option: FC<OptionProps> = (props) => {
  const { value, children } = props;
  const { selectedValue, toggleOption } = useContext(SelectContext);

  const classes = classNames(cmp_name, {
    select: selectedValue === value,
  });

  return (
    <li className={classes} onClick={() => toggleOption?.(value, children)}>
      {children}
    </li>
  );
};

export default Option;
