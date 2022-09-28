import React, { FC } from 'react';
import { ui_name } from '../_util/constant';
import classNames from 'classnames';
import './style/index.less';

interface SvgIconProps {
  icon: string;
  className?: string;
}

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { icon, className } = props;

  const classes = classNames([`${ui_name}_icon`, className]);

  return (
    <svg className={classes} aria-hidden="true">
      <use xlinkHref={icon}></use>
    </svg>
  );
};

export default SvgIcon;
