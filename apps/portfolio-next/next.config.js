// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = withPWA({
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	nx: {
		// Set this to true if you would like to to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: true,
	},
	pwa: {
		disable: !isProduction,
		// dest: 'public',
		runtimeCaching,
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
});

module.exports = withNx(nextConfig);
