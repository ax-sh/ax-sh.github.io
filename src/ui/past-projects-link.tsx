import React, { ComponentProps, PropsWithChildren } from "react";

export function ExternalLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a {...props} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
}

export function ExternalWorkLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <ExternalLink
      className='text-green-500 hover:underline cursor-pointer no-underline uppercase'
      {...props}
    >
      {children}
    </ExternalLink>
  );
}

export function PastProjectsLink({ children }: PropsWithChildren) {
  return <ExternalWorkLink href='https://bit.ly/4418VWz'>{children}</ExternalWorkLink>;
}
