import React, { ComponentProps, PropsWithChildren } from "react";

export function ExternalLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a {...props} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
}

function ExternalWorkLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <ExternalLink className='text-green-500 hover:text-red-500 cursor-pointer' {...props}>
      {children}
    </ExternalLink>
  );
}

export function PastProjectsLink({ children }: PropsWithChildren) {
  return (
    <ExternalWorkLink
      className='text-green-500 hover:text-red-500 cursor-pointer'
      href='https://bit.ly/4418VWz'
    >
      {children}
    </ExternalWorkLink>
  );
}
