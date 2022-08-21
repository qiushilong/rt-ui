import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import './style/button.less';

interface ButtonProps {
  /**
   * @description 按钮类型
   * @default 'default'
   */
  type?: 'primary' | 'default' | 'dashed' | 'text';
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
  [propsName: string]: any;
}

const Button = (props: ButtonProps) => {
  const { type, danger, disabled, loading, search, prefix, className, style, children, ...reset } =
    props;

  const classes = classNames('rt_btn', className);

  return (
    <button className={classes} style={style} {...reset}>
      {children}
    </button>
  );
};
export default Button;
