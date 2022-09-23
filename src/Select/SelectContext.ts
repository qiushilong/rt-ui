import { createContext } from 'react';
import type { Context } from 'react';

interface SelectContextState {
  selectedValue?: string | number;
  toggleOption?: (value: string | number | undefined, label: string) => void;
}

const context: Context<SelectContextState> = createContext({});

export default context;
