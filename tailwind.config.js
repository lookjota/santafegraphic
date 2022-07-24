module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      backgroundImage: {
        'patternBG': "url('./public/images/patternBG.png')",
        // 'patternBG': "url('/images/patternBG.png')",
      }
    },
	},
	plugins: [],
};
