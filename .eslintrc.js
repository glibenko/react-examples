module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"tsconfigRootDir": ".",
		"sourceType": "module",
		"allowImportExportEverywhere": false,
		"ecmaFeatures": {
			"jsx": true,
			"legacyDecorators": true
		}
	},
	"plugins": [
		"@babel/eslint-plugin",
		"@typescript-eslint",
		"react",
		"import",
		"react-hooks"
	],
	"settings": {
		"import/resolver": {
			'node' : {
				"paths": ["src", "global-types"],
				"extensions": ['.js', '.jsx', '.ts', '.tsx'],
			}
		},
	},
	"rules": {
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/require-render-return": 2,
		"react/self-closing-comp": 2,
		"react/jsx-boolean-value": 0,
		"react/jsx-equals-spacing": 1,
		"react/jsx-key": 2,
		"react/jsx-no-comment-textnodes": 1,
		"react/jsx-no-duplicate-props": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-pascal-case": 1,
		"generator-star-spacing": 1,
		"babel/new-cap": 0,
		"array-bracket-spacing": 1,
		"object-curly-spacing": 1,
		"babel/object-shorthand": 0,
		"babel/arrow-parens": 0,
		"no-await-in-loop": 0,
		"flowtype/object-type-delimiter": 0,
		"comma-dangle": 2,
		"no-unused-vars": [2, {"args": "none", "varsIgnorePattern": "React", "ignoreRestSiblings": true}],
		"no-useless-escape": 0,
		"no-control-regex": 0,
		"no-mixed-spaces-and-tabs": 2,
		"require-atomic-updates": 0,
		"no-prototype-builtins": 0,
		"import/no-named-as-default": 0,
		"import/no-named-as-default-member": 0,
		"no-console": [1, {"allow": ["warn", "error"]}],
		"curly": [2, "all"],
		"brace-style": [2, "1tbs", {"allowSingleLine": true}],
		"react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
		"react-hooks/exhaustive-deps": "warn", // Проверяем зависимости эффекта
		"import/namespace": 0,
		"import/default": 0,
		"@typescript-eslint/no-floating-promises": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/no-explicit-any": 1, // error
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-unsafe-assignment": 0,
		"@typescript-eslint/no-unsafe-member-access": 0,
		"@typescript-eslint/no-unsafe-return": 0,
		"@typescript-eslint/no-unsafe-call": 0,
		"@typescript-eslint/restrict-template-expressions": 0,
		"@typescript-eslint/restrict-plus-operands": 0,
		"@typescript-eslint/unbound-method": 0,
		"@typescript-eslint/no-unused-vars": 0,
		"@typescript-eslint/no-var-requires": 0,
		"import/no-named-as-default": 0,
		"import/no-named-as-default-member": 0,
		"react/display-name": 1,
		"import/no-unresolved": [2, { ignore: ['global-types'] }],
		"react/prop-types": 0,
		"no-restricted-syntax": [
			"error",
			{
				"selector": "TSEnumDeclaration",
				"message": "Enums is forbidden use consts and valueof<typeof TYPE>."
			}
		]
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"

	],
	"env": {
		"browser": true,
		"node": true
	},
	"globals": {
		"__DEV__": true,
		"global-types": true
	}
};
