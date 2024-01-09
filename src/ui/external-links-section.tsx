'use client';
import React from 'react';
import { data } from '@/ui/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Obfuscate from 'react-obfuscate';
export const ExternalLinksSection = () => (
  <div className='links'>
    <ul className='flex w-60 justify-between pointer-events-auto'>
      {Object.entries(data.links).map(([label, value]) => (
        <li key={label}>
          <Obfuscate target='_blank' href={value}>
            {label}
            {/*<GetIcon name={label} />*/}
          </Obfuscate>
        </li>
      ))}
    </ul>
  </div>
);
