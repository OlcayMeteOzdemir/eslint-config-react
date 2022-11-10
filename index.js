module.exports = {
	extends: [
		'@meteozdemir/eslint-config-core',
		'./rules/core',
		'./rules/react',
		'./rules/react-hooks',
		'./rules/jsx-a11y',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
