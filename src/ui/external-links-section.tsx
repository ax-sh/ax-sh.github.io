'use client';
import React from 'react';
import { data } from '@/ui/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import {
  SiCodesandbox,
  SiGithub,
  SiLinkedin,
  SiMaildotru,
  SiTwitter
} from '@icons-pack/react-simple-icons';

export function GetIcon({ name }: { name: string }) {
  const [hovered, setHover] = React.useState(false);
  const props = {
    onMouseOver: () => setHover(true),
    onMouseOut: () => setHover(false),
    color: hovered ? 'gray' : 'white'
  };

  switch (name) {
    case 'LinkedIn':
      return <SiLinkedin {...props} />;
    case 'CodeSandbox':
      return <SiCodesandbox {...props} />;
    case 'Twitter':
      return <SiTwitter {...props} />;
    case 'Github':
      return <SiGithub {...props} />;
    case 'Email':
      return <SiMaildotru {...props} />;
    default:
      return <h6>{name}</h6>;
  }
}

export const ExternalLinksSection = () => (
  <div className='links'>
    <ul className='flex w-60 justify-between pointer-events-auto'>
      {Object.entries(data.links).map(([label, value]) => (
        <li key={label}>
          <Obfuscate target='_blank' href={value}>
            <GetIcon name={label} />
          </Obfuscate>
        </li>
      ))}
    </ul>
  </div>
);
