import React, { FC, ReactNode } from 'react';

interface RowProps {
  children?: ReactNode;
}

const Row: FC<RowProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Row;
