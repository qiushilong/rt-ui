import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { ui_name } from '../_util/constant';
import './style/select.less';

export interface SelectProps {
  /**
   * @description 选中值
   * @default
   */
  value?: number | string;
  /**
   * @description 选项
   * @default
   */
  options?: { label: string; value: number | string }[];
  /**
   * @description 默认值
   * @default
   */
  defaultValue?: number | string;
  /**
   * @description 允许清除
   * @default false
   */
  allowClear?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否可以搜索
   * @default false
   */
  search?: boolean;
  /**
   * @description class
   * @default
   */
  className?: string;
  /**
   * @description 改变事件
   * @default
   */
  onChange?: Function;
}

const Select: FC<SelectProps> = (props) => {
  const { value, options, defaultValue, allowClear, disabled, search, className, onChange } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [val, setVal] = useState<number | string | undefined>(defaultValue);

  const handleFocus = () => {
    setOpen(true);
  };
  const handleBlur = () => {};

  const handleClick = (key: number | string) => {
    console.log(key);
    setVal(options?.find((item) => item.value === key)?.label);
    setOpen(false);
  };

  const classes = classNames(
    `${ui_name}_select`,
    {
      [`${ui_name}_select_search`]: search,
    },
    className,
  );

  const downClasses = classNames(`${ui_name}_select_down`, {
    open: open,
  });

  return (
    <div className={classes}>
      <div className={`${ui_name}_select_content`}>
        <input
          type="text"
          readOnly
          value={value || val}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <ul className={downClasses}>
        {options?.map((item) => (
          <li key={item.value} onClick={() => handleClick(item.value)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
