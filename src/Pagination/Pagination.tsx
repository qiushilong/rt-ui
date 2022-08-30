import React, { FC } from 'react';
import classNames from 'classnames';

interface PaginationProps {
  /**
   * @description 页码
   * @default 1
   */
  current?: number;
  /**
   * @description 页面容量
   * @default 10
   */
  pageSize?: number;
  /**
   * @description 数据总数
   * @default 10
   */
  total?: number;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description classname
   * @default
   */
  className?: string;
  /**
   * @description 页码变化触发事件
   * @default
   */
  onChange?: Function;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { current, pageSize, total, disabled, onChange } = props;

  return <>Paginatio</>;
};

export default Pagination;
