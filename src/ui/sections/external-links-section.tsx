"use client";

import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Obfuscate from "react-obfuscate";

import type { IconType } from "@/ui/common";
import { data } from "@/ui/common";
import {
  SiCodesandbox,
  SiDevdotto,
  SiGithub,
  SiLinkedin,
  SiMaildotru,
  SiX as SiTwitter
} from "@icons-pack/react-simple-icons";

// temp hotfix for warning on console because of

const { error } = console;

console.error = (...args: unknown[]) => {
  if (/defaultProps/.test(args[0] as string)) return;
  error(...args);
};

export function GetIcon({ name }: { name: IconType | string }) {
  const [hovered, setHovered] = React.useState(false);
  const props = {
    onMouseOver: () => setHovered(true),
    onMouseOut: () => setHovered(false),
    color: hovered ? "gray" : "white"
  };

  switch (name) {
    case "LinkedIn":
      return <SiLinkedin {...props} />;
    case "CodeSandbox":
      return <SiCodesandbox {...props} />;
    case "Twitter":
      return <SiTwitter {...props} />;
    case "Github":
      return <SiGithub {...props} />;
    case "Email":
      return <SiMaildotru {...props} />;
    case "Dev":
      return <SiDevdotto {...props} />;
    default:
      return <h6>{name}</h6>;
  }
}

export function ExternalLinksSection() {
  return (
    <nav className='links'>
      <ul className='flex w-60 justify-between pointer-events-auto list-none'>
        {Object.entries(data.links).map(([label, value]) => (
          <li key={label}>
            {/* @ts-expect-error skip error caused by types for non ts lib */}
            <Obfuscate target='_blank' href={value}>
              <GetIcon name={label} />
            </Obfuscate>
          </li>
        ))}
      </ul>
    </nav>
  );
}
