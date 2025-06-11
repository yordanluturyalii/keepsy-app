/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontSize: {
				// Display
				'display-120': 80, // 5rem
				'display-110': 80,
				'display-100': 80,
				'display-90': 64,  // 4rem
				'display-80': 64,
				'display-70': 64,
				'display-60': 56,  // 3.5rem
				'display-50': 56,
				'display-40': 56,
				'display-30': 48,  // 3rem
				'display-20': 48,
				'display-10': 48,

				// Title
				'title-100': 40,   // 2.5rem
				'title-90': 40,
				'title-80': 40,
				'title-70': 32,    // 2rem
				'title-60': 32,
				'title-50': 24,    // 1.5rem
				'title-40': 24,
				'title-30': 20,    // 1.25rem
				'title-20': 24,
				'title-10': 18,    // 1.125rem
				'title-5': 18,

				// Body
				'body-120': 16,    // 1rem
				'body-110': 16,
				'body-100': 16,
				'body-90': 14,     // 0.875rem
				'body-80': 14,
				'body-70': 14,
				'body-60': 12,     // 0.75rem
				'body-50': 12,
				'body-40': 12,
				'body-30': 10,     // 0.625rem
				'body-20': 10,
				'body-10': 10,

				// Caption
				'caption-20': 11,  // 0.688rem
				'caption-10': 14,  // 0.875rem
			},

			fontWeight: {
				thin: "100",
				extralight: "200",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
				extrabold: "800",
				black: "900",
			},

			colors: {
				primary: {
					950: '#1D184E',
					900: '#2F2887',
					800: '#3528AB',
					700: '#412ED4',
					600: '#4B3BF0',
					500: '#6967FB',
					400: '#7980FF',
					300: '#9FADFF',
					200: '#C3CEFF',
					100: '#DEE5FF',
					50: '#EDF0FF',
				},
			},
			plugins: [],
		}
	}
};
