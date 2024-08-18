/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: { min: '375px', max: '819px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1080px' },
		},
		extend: {},
	},
	plugins: [],
};
