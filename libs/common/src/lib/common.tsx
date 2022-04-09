import './common.module.scss';
import { GetIcon } from './Icons';
import React from 'react';
// @ts-ignore
import Obfuscate from 'react-obfuscate';

const data = {
  email: 'example@example.com',
  // cv: "",
  links: {
    Github: 'https://github.com/ax-sh',
    LinkedIn: 'https://www.linkedin.com/in/axmin/',
    CodeSandbox: 'https://codesandbox.io/u/ax-sh',
    Twitter: 'https://twitter.com/ax___sh',
    Website: 'https://ax-sh.github.io/portfolio/',
    // CV: "",
  },
};

export const ExternalLinks = () => (
  <div className="links">
    <ul className="flex w-50 justify-around">
      {Object.entries(data.links).map(([label, value]) => (
        <li key={label}>
          <Obfuscate target="_blank" href={value}>
            <GetIcon name={label} />
          </Obfuscate>
        </li>
      ))}
    </ul>
  </div>
);

