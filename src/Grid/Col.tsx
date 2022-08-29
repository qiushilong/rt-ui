import React, { useContext, CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { ui_name } from '../_util/constant';
import RowContext from './RowContext';
import './style/col.less';
export interface ColProps {
  /**
   * @description 占位
   * @default
   */
  span?: number;
  /**
   * @description 偏移量
   * @default
   */
  offset?: number;
  /**
   * @description 排序
   * @default
   */
  order?: number;
  /**
   * @description className
   * @default
   */
  className?: string;
  /**
   * @description children
   * @default
   */
  style?: CSSProperties;
  /**
   * @description children
   * @default
   */
  children?: ReactNode;
}

const Col: FC<ColProps> = (props) => {
  const { span = 0, offset = 0, order, className, style, children } = props;
  const { gutter = [0, 0] } = useContext(RowContext);
  const classes = classNames(`${ui_name}_col`, className);

  const styles: CSSProperties = {
    flexBasis: `${(span / 24) * 100}%`,
    marginLeft: `${(offset / 24) * 100}%`,
    margin: `${gutter[0]}px ${gutter[1]}px`,
    order: order,
    ...style,
  };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};

export default Col;
