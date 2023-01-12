module.exports = {
	plugins: ['react'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json'],
			},
		},
		'react': {
			pragma: 'React',
			fragment: 'Fragment',
			version: 'detect',
		},
		'propWrapperFunctions': ['forbidExtraProps', 'exact', 'Object.freeze'],
	},
	rules: {
		'react/boolean-prop-naming': [
			'off',
			{
				propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
				rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
				message: 'Property name must begin with "is" or "has".',
				validateNested: false,
			},
		],
		'react/button-has-type': [
			'error',
			{
				button: true,
				submit: true,
				reset: false,
			},
		],
		'react/default-props-match-prop-types': [
			'error',
			{
				allowRequiredDefaults: false,
			},
		],
		'react/destructuring-assignment': [
			'error',
			'always',
			{
				ignoreClassFields: false,
				destructureInSignature: 'ignore',
			},
		],
		'react/display-name': [
			'off',
			{
				ignoreTranspilerName: false,
			},
		],
		'react/forbid-component-props': [
			'off',
			{
				forbid: [],
			},
		],
		'react/forbid-dom-props': [
			'off',
			{
				forbid: [],
			},
		],
		'react/forbid-elements': [
			'off',
			{
				forbid: [],
			},
		],
		'react/forbid-foreign-prop-types': [
			'error',
			{
				allowInPropTypes: true,
			},
		],
		'react/forbid-prop-types': [
			'error',
			{
				forbid: ['any', 'array', 'object'],
				checkContextTypes: true,
				checkChildContextTypes: true,
			},
		],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration', 'function-expression'],
				unnamedComponents: 'function-expression',
			},
		],
		'react/hook-use-state': [
			'error',
			{
				allowDestructuredState: false,
			},
		],
		'react/iframe-missing-sandbox': 'error',
		'react/jsx-boolean-value': [
			'error',
			'never',
			{
				always: [],
			},
		],
		'react/jsx-child-element-spacing': 'off',
		'react/jsx-closing-bracket-location': [
			'error',
			{
				nonEmpty: 'line-aligned',
				selfClosing: 'line-aligned',
			},
		],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'never',
				propElementValues: 'always',
			},
		],
		'react/jsx-curly-newline': [
			'error',
			{
				multiline: 'consistent',
				singleline: 'consistent',
			},
		],
		'react/jsx-curly-spacing': [
			'error',
			'never',
			{
				allowMultiline: true,
			},
		],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx'],
			},
		],
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-handler-names': [
			'off',
			{
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
				checkLocalVariables: false,
				checkInlineFunction: false,
			},
		],
		'react/jsx-indent': [
			'error',
			'tab',
			{
				checkAttributes: false,
				indentLogicalExpressions: false,
			},
		],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': [
			'off',
			{
				checkFragmentShorthand: false,
				checkKeyMustBeforeSpread: false,
				warnOnDuplicates: false,
			},
		],
		'react/jsx-max-depth': [
			'off',
			{
				max: 10,
			},
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
				when: 'multiline',
			},
		],
		'react/jsx-newline': [
			'off',
			{
				prevent: false,
				allowMultilines: false,
			},
		],
		'react/jsx-no-bind': [
			'error',
			{
				ignoreDOMComponents: true,
				ignoreRefs: true,
				allowArrowFunctions: true,
				allowFunctions: false,
				allowBind: false,
			},
		],
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-constructed-context-values': 'error',
		'react/jsx-no-duplicate-props': [
			'error',
			{
				ignoreCase: true,
			},
		],
		'react/jsx-no-leaked-render': [
			'error',
			{
				validStrategies: ['ternary', 'coerce'],
			},
		],
		'react/jsx-no-literals': [
			'off',
			{
				noStrings: false,
				allowedStrings: [],
				ignoreProps: false,
				noAttributeStrings: false,
			},
		],
		'react/jsx-no-script-url': [
			'error',
			[
				{
					name: 'Link',
					props: ['to'],
				},
			],
		],
		'react/jsx-no-target-blank': [
			'error',
			{
				allowReferrer: false,
				enforceDynamicLinks: 'always',
				warnOnSpreadAttributes: false,
				links: true,
				forms: false,
			},
		],
		'react/jsx-no-undef': [
			'error',
			{
				allowGlobals: false,
			},
		],
		'react/jsx-no-useless-fragment': [
			'error',
			{
				allowExpressions: false,
			},
		],
		'react/jsx-one-expression-per-line': [
			'error',
			{
				allow: 'single-child',
			},
		],
		'react/jsx-pascal-case': [
			'error',
			{
				allowAllCaps: false,
				allowLeadingUnderscore: false,
				allowNamespace: false,
				ignore: [],
			},
		],
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-props-no-spreading': [
			'error',
			{
				html: 'enforce',
				custom: 'enforce',
				explicitSpread: 'ignore',
				exceptions: [],
			},
		],
		'react/jsx-sort-props': [
			'off',
			{
				callbacksLast: false,
				shorthandFirst: false,
				shorthandLast: false,
				multiline: 'ignore',
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: true,
				locale: 'auto',
			},
		],
		'react/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never',
			},
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			},
		],
		'react/no-access-state-in-setstate': 'error',
		'react/no-adjacent-inline-elements': 'error',
		'react/no-array-index-key': 'error',
		'react/no-arrow-function-lifecycle': 'error',
		'react/no-children-prop': [
			'error',
			{
				allowFunctions: false,
			},
		],
		'react/no-danger': 'warn',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'off',
		'react/no-find-dom-node': 'error',
		'react/no-invalid-html-attribute': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': [
			'error',
			{
				ignoreStateless: false,
			},
		],
		'react/no-namespace': 'error',
		'react/no-object-type-as-default-prop': 'error',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-string-refs': [
			'error',
			{
				noTemplateLiterals: false,
			},
		],
		'react/no-this-in-sfc': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': [
			'error',
			{
				forbid: [],
			},
		],
		'react/no-unknown-property': [
			'error',
			{
				ignore: [],
			},
		],
		'react/no-unsafe': [
			'off',
			{
				checkAliases: false,
			},
		],
		'react/no-unstable-nested-components': [
			'error',
			{
				allowAsProps: false,
			},
		],
		'react/no-unused-class-component-methods': 'error',
		'react/no-unused-prop-types': [
			'error',
			{
				ignore: [],
				customValidators: [],
				skipShapeProps: true,
			},
		],
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': ['error', 'always'],
		'react/prefer-exact-props': 'error',
		'react/prefer-read-only-props': 'off',
		'react/prefer-stateless-function': [
			'error',
			{
				ignorePureComponents: true,
			},
		],
		'react/prop-types': [
			'error',
			{
				ignore: [],
				customValidators: [],
				skipUndeclared: false,
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': [
			'error',
			{
				forbidDefaultForRequired: true,
				classes: 'defaultProps',
				functions: 'defaultProps',
			},
		],
		'react/require-optimization': [
			'off',
			{
				allowDecorators: [],
			},
		],
		'react/require-render-return': 'error',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'react/sort-comp': [
			'error',
			{
				order: [
					'static-variables',
					'static-methods',
					'instance-variables',
					'lifecycle',
					'/^handle.+$/',
					'/^on.+$/',
					'getters',
					'setters',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'instance-methods',
					'everything-else',
					'rendering',
				],
				groups: {
					lifecycle: [
						'displayName',
						'propTypes',
						'contextTypes',
						'childContextTypes',
						'mixins',
						'statics',
						'defaultProps',
						'constructor',
						'getDefaultProps',
						'getInitialState',
						'state',
						'getChildContext',
						'getDerivedStateFromProps',
						'componentWillMount',
						'UNSAFE_componentWillMount',
						'componentDidMount',
						'componentWillReceiveProps',
						'UNSAFE_componentWillReceiveProps',
						'shouldComponentUpdate',
						'componentWillUpdate',
						'UNSAFE_componentWillUpdate',
						'getSnapshotBeforeUpdate',
						'componentDidUpdate',
						'componentDidCatch',
						'componentWillUnmount',
					],
					rendering: ['/^render.+$/', 'render'],
				},
			},
		],
		'react/sort-default-props': [
			'off',
			{
				ignoreCase: true,
			},
		],
		'react/sort-prop-types': [
			'off',
			{
				ignoreCase: true,
				callbacksLast: false,
				requiredFirst: false,
				sortShapeProp: true,
				noSortAlphabetically: false,
			},
		],
		'react/state-in-constructor': ['error', 'always'],
		'react/static-property-placement': [
			'error',
			'static public field',
			{
				childContextTypes: 'static public field',
				contextTypes: 'static public field',
				contextType: 'static public field',
				defaultProps: 'static public field',
				displayName: 'static public field',
				propTypes: 'static public field',
			},
		],
		'react/style-prop-object': [
			'error',
			{
				allow: [],
			},
		],
		'react/void-dom-elements-no-children': 'error',
	},
};
