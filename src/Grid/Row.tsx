import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ui_name } from '../_util/constant';
import RowContext from './RowContext';
import './style/row.less';

const { Provider } = RowContext;
export interface RowProps {
  /**
   * @description 间隔
   * @default
   */
  gutter?: [number, number];
  /**
   * @description className
   * @default
   */
  className?: string;
  /**
   * @description children
   * @default
   */
  children?: ReactNode;
  [propsName: string]: any;
}

const Row: FC<RowProps> = (props) => {
  const { gutter = [0, 0], className, children, ...reset } = props;

  const classes = classNames(`${ui_name}_row`, className);

  return (
    <Provider value={{ gutter }}>
      <div className={classes}>{children}</div>
    </Provider>
  );
};

export default Row;
