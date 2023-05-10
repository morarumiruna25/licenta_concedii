/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				// define your custom colors here
				bg: "#ffffff",
				main: "#00171f",
				blue1: "#003459",
				blue2: "#007ea7",
				blue3: "#00a8e8",
				blue4: "#2272FF",
				pink: "#E43F5A",
			},
			fontFamily: {
				custom: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
