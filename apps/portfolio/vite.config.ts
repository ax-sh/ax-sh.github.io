import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { qrcode } from 'vite-plugin-qrcode';
import svgr from 'vite-plugin-svgr';
// import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		WindiCSS(),
		Pages(),
		svgr(),
		qrcode(), // only applies in dev mode
		viteCompression({ algorithm: 'brotliCompress' }),
		// input https://www.npmjs.com/package/html-minifier-terser options
		ViteMinifyPlugin({ minifyJS: true, minifyCSS: true, removeComments: true }),
		VitePWA({ registerType: 'autoUpdate' }),
	],
	// plugins: [react(), WindiCSS()],
	server: { host: true },
});
