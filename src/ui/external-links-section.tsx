'use client';
import React from 'react';
import { data } from '@/ui/common';
// @ts-ignore
// eslint-disable-next-line
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
