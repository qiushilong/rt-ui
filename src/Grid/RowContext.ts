import { createContext } from 'react';
import type { Context } from 'react';

interface RowContextState {
  gutter?: [number, number];
}

const context: Context<RowContextState> = createContext({});

export default context;
