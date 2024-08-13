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
