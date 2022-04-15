import React from 'react';
import clsx from 'clsx';

export const List = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ul className={clsx(`list`, className)} {...props}>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
};
