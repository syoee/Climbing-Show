/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		animation: {
			'fill-bar': 'fillBar 3s linear forwards', // 3초 동안 채우는 애니메이션
		},
		keyframes: {
			fillBar: {
				'0%': { width: '0%' },
				'100%': { width: '100%' },
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
