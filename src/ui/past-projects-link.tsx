import React, { ComponentProps, PropsWithChildren } from "react";

function ExternalLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a {...props} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
}

export function PastProjectsLink({ children }: PropsWithChildren) {
  return (
    <ExternalLink
      className='text-green-500 hover:text-red-500 cursor-pointer'
      href='https://bit.ly/4418VWz'
    >
      {children}
    </ExternalLink>
  );
}
