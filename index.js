module.exports = {
	extends: [
		'@meteozdemir/eslint-config-core',
		'./rules/core',
		'./rules/react',
		'./rules/react-hooks',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
