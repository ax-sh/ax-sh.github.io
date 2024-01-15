import React from "react";

import { ExternalWorkLink, PastProjectsLink } from "@/ui/past-projects-link";

export function CTALinks() {
  return (
    <div data-testid='cta' className='flex gap-2 text-xl'>
      <PastProjectsLink>Projects</PastProjectsLink>
      <ExternalWorkLink href='https://codesandbox.io/u/ax-sh'>Works</ExternalWorkLink>
    </div>
  );
}
