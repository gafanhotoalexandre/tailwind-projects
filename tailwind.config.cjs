/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		extend: {
			colors: {
				primary: '#f2dae7',
				blue: {
					light: '#c5dfff',
					dark: '#061e3c',
					hover: '#1057b0',
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				dance: ['Dancing Script', 'cursive']
			},
			keyframes: {
				bell_kf: {
					'0%, 100%': {
						transform: 'rotate(-10deg)'
					},
					'50%': {
						transform: 'rotate(10deg)'
					}
				},
			},
			animation: {
				bell: 'bell_kf 0.31s ease-in-out infinite'
			}
		},
	},
  plugins: [],
}
