import React from 'react';

export const List = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ul className={`list ${className}`} {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
};
