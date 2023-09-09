module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"next",
		"next/core-web-vitals",
		'xo',
		'airbnb',
		'airbnb-typescript',
		'plugin:react/recommended',
		'prettier',
	],
	 parserOptions: {
		 ecmaVersion: 'latest',
		 sourceType: 'module',
	  project: './tsconfig.json'
	 },
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],

	plugins: [
		'react',
	],
	rules: {
		'object-curly-spacing': ['off'],
		'quotes': ['off'],
	},
};
