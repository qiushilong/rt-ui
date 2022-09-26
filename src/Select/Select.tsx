import React, { FC, ReactNode, useState, useRef, CSSProperties, ChangeEvent } from 'react';
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
   * @description 是否可以搜索
   * @default false
   */
  search?: boolean;
  style?: CSSProperties;
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
  const { value, defaultValue, allowClear, search, style, className, children, onChange } = props;

  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
  const [selfValue, setSelfValue] = useState<ValueType>(defaultValue);
  const [searchValue, setSearchValue] = useState<ValueType>('');
  const inputRef = useRef(null);

  const handleClick = () => {
    setDropDownVisible(!dropDownVisible);
  };

  const handleBlur = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleOption = (value: ValueType) => {
    onChange?.(value);
    setSelfValue(value);
    setSearchValue(undefined);
    setDropDownVisible(true);
  };

  const classes = classNames(
    cmp_name,
    {
      [`${cmp_name}_search`]: search,
    },
    className,
  );

  const dropdownClasses = classNames(`${cmp_name}_dropdown`, {
    open: dropDownVisible,
  });

  const finalValue = value || (searchValue ?? selfValue); // 优先级：props.value > search.value(可以等于空串) > self.value

  return (
    <div className={classes} style={style} onClick={handleClick} onBlur={handleBlur}>
      <div className={`${cmp_name}_content`}>
        <input
          type="text"
          readOnly={!search}
          value={finalValue}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      <Provider
        value={{
          selectedValue: finalValue,
          searchValue: searchValue,
          toggleOption: toggleOption,
        }}
      >
        <ul className={dropdownClasses}>{children}</ul>
      </Provider>
    </div>
  );
};

export default Select;
