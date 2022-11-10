module.exports = {
	rules: {
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [
					'render',
					'getInitialState',
					'getDefaultProps',
					'getChildContext',
					'componentWillMount',
					'UNSAFE_componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'UNSAFE_componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'UNSAFE_componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount',
					'componentDidCatch',
					'getSnapshotBeforeUpdate',
				],
			},
		],
		'no-underscore-dangle': [
			'error',
			{
				allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
			},
		],
		'jsx-quotes': ['error', 'prefer-double'],
	},
};
