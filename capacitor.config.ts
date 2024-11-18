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
	webDir: 'dist',
	bundledWebRuntime: false,
	server: {
		url: 'http://localhost:3000', // 개발 환경 URL
		cleartext: true, // HTTP 사용 허용
		iosScheme: 'http', // ios에서 HTTP 스키마 사용
		androidScheme: 'http', // android에서 HTTP 스키마 사용
	},
	allowNavigation: [
		'www.climbing-show.com',
		'localhost',
		'*.daum.net',
		'*.kakao.com',
	],
};

export default config;
