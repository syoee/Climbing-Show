import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig & {
	allowNavigation?: string[];
	androidScheme?: string;
	iosScheme?: string;
	hostname?: string;
} = {
	appId: 'com.climbingshow.app',
	appName: 'Climbing-Show',
	hostname: 'www.climbing-show.com', // 실제 배포된 URL
	androidScheme: 'http',
	iosScheme: 'http',
	webDir: 'dist',
	bundledWebRuntime: false,
	allowNavigation: [
		'www.climbing-show.com',
		'localhost',
		'*.daum.net',
		'*.kakao.com',
	],
};

export default config;
