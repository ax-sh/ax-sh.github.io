import { defineConfig } from 'windicss/helpers';

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

const content = [
  'src/**/*.{js,jsx,ts,tsx}',
  // 'libs/common/src/**/*.{js,jsx,ts,tsx}',
  ...createGlobPatternsForDependencies(__dirname),
];
console.log(content);

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}', ...content],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
});
