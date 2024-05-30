/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}',
		'./js/**/*.{html,js}',
		'./index.html',
	  ],
	theme: {
	  extend: {
		screens: {
			'sm':  '640px',
			'md':  '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536',
			'3xl': '1920px',
			'4xl': '2560px'
		}
	  },
	},
	plugins: [],
  }

