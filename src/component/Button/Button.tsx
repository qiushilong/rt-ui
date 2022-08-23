import React, { CSSProperties, ReactNode, LegacyRef, forwardRef } from 'react';
import classNames from 'classnames';
import { ui_name } from '../_util/constant';
import LoadingIcon from './LoadingIcon';
import './style/button.less';

interface ButtonProps {
  /**
   * @description 按钮类型
   * @default 'default'
   */
  type?: 'primary' | 'default' | 'dashed';
  /**
   * @description 是否显示危险按钮
   * @default false
   */
  danger?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否正在加载
   * @default false
   */
  loading?: boolean;
  /**
   * @description 是否是搜索按钮
   * @default false
   */
  search?: boolean;
  /**
   * @description 前缀
   * @default
   */
  prefix?: ReactNode;
  /**
   * @description className
   * @default
   */
  className?: string;
  /**
   * @description style
   * @default
   */
  style?: CSSProperties;
  /**
   * @description children
   * @default
   */
  children?: ReactNode;
  /**
   * @description 点击事件
   * @default
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [propsName: string]: any;
}

const Button = forwardRef((props: ButtonProps, ref: LegacyRef<HTMLButtonElement>) => {
  const {
    type,
    danger,
    disabled,
    loading,
    search,
    prefix,
    className,
    style,
    children,
    onClick,
    ...reset
  } = props;

  const classes = classNames(
    `${ui_name}_btn`,
    `${ui_name}_btn_${type || 'default'}`,
    {
      [`${ui_name}_btn_danger`]: danger,
      [`${ui_name}_btn_disabled`]: disabled,
      [`${ui_name}_search`]: search,
    },
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (loading || disabled) {
      return;
    }
    onClick?.(e);
  };

  return (
    <button className={classes} style={style} {...reset} onClick={handleClick} ref={ref}>
      {loading ? <LoadingIcon /> : prefix}
      {children}
    </button>
  );
});
export default Button;
