import { defineConfig } from 'windicss/helpers';
import { createGlobPatternsForDependencies } from '@nrwl/react/tailwind';

export default defineConfig({
	extract: {
		include: ['**/*.{jsx,tsx,css}', ...createGlobPatternsForDependencies(__dirname)],
		exclude: ['node_modules', '.git', '.next'],
	},
});
