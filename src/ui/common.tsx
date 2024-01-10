export type ProjectProps = {
  name: string;
  link: string;
  image: string | null;
  external?: boolean;
};

export const PROJECTS: ProjectProps[] = [
  {
    name: 'Innicement',
    link: 'https://ax-sh.github.io/innicement/',
    image: 'projects/innicement.png'
  },
  {
    name: 'Xenovrs',
    link: 'https://statuesque-semolina-a1b399.netlify.app/',
    image: 'projects/xenovrs.png'
  },
  {
    name: 'Works',
    link: 'https://bit.ly/4418VWz',
    // link: 'https://ax-sh.notion.site/Projects-b61ea900922b48dfb4bb805606d7a37a',
    image: null,
    external: true
  }
];

export const data = {
  email: 'example@example.com',
  // cv: "",
  links: {
    Github: 'https://github.com/ax-sh',
    LinkedIn: 'https://www.linkedin.com/in/axmin/',
    CodeSandbox: 'https://codesandbox.io/u/ax-sh',
    Twitter: 'https://twitter.com/ax___sh',
    Email: 'mailto:axmin.shrestha@pm.me',
    Dev: 'https://dev.to/axsh/'
    // Website: 'https://ax-sh.github.io/portfolio/',
    // CV: "",
  }
} as const;
