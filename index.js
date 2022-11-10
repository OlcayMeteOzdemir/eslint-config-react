module.exports = {
	extends: ['@meteozdemir/eslint-config-core', './rules/core', './rules/react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
