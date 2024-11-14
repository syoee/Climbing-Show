import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig & {
	allowNavigation?: string[];
	androidScheme?: string;
	hostname?: string;
} = {
	appId: 'com.climbingshow.app',
	appName: 'Climbing-Show',
	hostname: 'www.climbing-show.com', // 실제 배포된 URL
	androidScheme: 'http',
	webDir: 'dist',
	bundledWebRuntime: false,
	allowNavigation: ['www.climbing-show.com'],
};

export default config;
