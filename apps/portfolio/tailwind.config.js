const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    'libs/common/src/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: { colors: { red: '#F71735' } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
