import React, { FC, ReactNode } from 'react';

interface ColProps {
  children?: ReactNode;
}

const Col: FC<ColProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default Col;
