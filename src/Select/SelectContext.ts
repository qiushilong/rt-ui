import { createContext } from 'react';
import type { Context } from 'react';
import type { ValueType } from './index';

interface SelectContextState {
  selectedValue?: ValueType;
  searchValue?: ValueType;
  toggleOption?: (value: ValueType, label: string) => void;
}

const context: Context<SelectContextState> = createContext({});

export default context;
