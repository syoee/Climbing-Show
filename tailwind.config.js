/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		animation: {
			'fill-height': 'fillHeight 2s ease-in-out forwards', // 높이 애니메이션
		},
		keyframes: {
			fillHeight: {
				'0%': { height: '0%' },
				'100%': { height: '100%' },
			},
		},
		screens: {
			sm: { min: '375px', max: '819px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1080px' },
		},
		extend: {},
	},
	plugins: [],
};
