import React, { FC, ReactNode, useState, useRef } from 'react';
import classNames from 'classnames';
import { ui_name } from '../_util/constant';
import SelectContext from './SelectContext';
import './style/select.less';

export type ValueType = number | string | undefined;
export interface SelectProps {
  /**
   * @description 选中值
   * @default
   */
  value?: ValueType;
  /**
   * @description 选项
   * @default
   */
  options?: { label: string; value: number | string }[];
  /**
   * @description 默认值
   * @default
   */
  defaultValue?: ValueType;
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
  children?: ReactNode;
  /**
   * @description 改变事件
   * @default
   */
  onChange?: (value: ValueType) => void;
}

const cmp_name = `${ui_name}_select`;
const { Provider } = SelectContext;

const Select: FC<SelectProps> = (props) => {
  const {
    value,
    options,
    defaultValue,
    allowClear,
    disabled,
    search,
    className,
    children,
    onChange,
  } = props;

  const [dropDownVisiable, setDropDownVisiable] = useState<boolean>(false);
  const [selfValue, setSelfValue] = useState<ValueType>(defaultValue);
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const inputRef = useRef(null);

  const handleClick = () => {
    setDropDownVisiable(!dropDownVisiable);
  };

  const handleBlur = () => {
    console.log('handleBlur');
    // 询问 toggleOption 是否要执行
    new Promise(() => {}).then(() => {
      setDropDownVisiable(false);
    });
  };

  const toggleOption = (value: ValueType, label: string) => {
    console.log('sss');

    inputRef.current?.focus();
    onChange?.(value);
    setSelfValue(value);
    setSelectedLabel(label);
    // setDropDownVisiable(false);
  };

  const classes = classNames(
    cmp_name,
    {
      [`${cmp_name}_search`]: search,
    },
    className,
  );

  const dropdownClasses = classNames(`${cmp_name}_dropdown`, {
    open: dropDownVisiable,
  });

  return (
    <div className={classes} onClick={handleClick}>
      <div className={`${cmp_name}_content`}>
        <input
          type="text"
          readOnly
          value={selectedLabel || selfValue}
          onBlur={handleBlur}
          ref={inputRef}
        />
      </div>
      <Provider value={{ selectedValue: value, toggleOption: toggleOption }}>
        <ul className={dropdownClasses}>{children}</ul>
      </Provider>
    </div>
  );
};

export default Select;
