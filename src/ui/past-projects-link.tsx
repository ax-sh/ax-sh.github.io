import React, { PropsWithChildren } from 'react';

export function PastProjectsLink({ children }: PropsWithChildren) {
  return (
    <a
      className='text-green-500 hover:text-red-500 cursor-pointer'
      href='https://bit.ly/4418VWz'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
}
