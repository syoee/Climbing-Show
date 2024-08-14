const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	transpileDependencies: true,
	pages: {
		index: {
			entry: 'src/main.ts',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	devServer: {
		port: 3000,
	},
	css: {
		loaderOptions: {
			postcss: {
				postcssOptions: {
					plugins: [require('tailwindcss'), require('autoprefixer')],
				},
			},
		},
	},
});
