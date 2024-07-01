/** @type {import('tailwindcss').Config} */
// biome-ignore lint/style/noDefaultExport: tailwind expects it to be default
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
