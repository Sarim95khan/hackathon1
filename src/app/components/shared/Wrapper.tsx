import React, { FC } from 'react';

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="px-6 md:px-16 py-4">{children}</div>;
};

export default Wrapper;
