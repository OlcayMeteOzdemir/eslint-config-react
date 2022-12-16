# eslint-config-react

Custom ESLint settings for React as an extensible shared config.

## Installation

If using npm version 5+:

```bash
npx install-peerdeps --dev @meteozdemir/eslint-config-react
```

If using npm version version < 5:

```bash
npm install -g install-peerdeps
install-peerdeps --dev @meteozdemir/eslint-config-react
```

If want to install manually without install-peerdeps CLI:

```bash
npm i -D @meteozdemir/eslint-config-react eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

A `.eslintrc` file will be automatically created in the root of your project with:

```json
{
    "extends": [
        "@meteozdemir/eslint-config-react",
        "@meteozdemir/eslint-config-react/rules/prettier"
    ],
    "rules": {}
}
```

If the file is not created automatically by any reason, simply create a `.eslintrc` file in the root of project and copy code above.

## @meteozdemir/eslint-config-react/rules/prettier

Prettier is enabled by default with this package and `@meteozdemir/eslint-config-react/rules/prettier` disables ESLint rules that might conflict with Prettier.

If you don't want to use Prettier, remove `'@meteozdemir/eslint-config-react/rules/prettier'` from `.eslintrc` file.

```json
{
    "extends": ["@meteozdemir/eslint-config-react"],
    "rules": {}
}
```

## Rule Override

Add any rule you want to override to rules object in `.eslintrc` file.

```json
{
    "extends": [
        "@meteozdemir/eslint-config-react",
        "@meteozdemir/eslint-config-react/rules/prettier"
    ],
    "rules": {
        // ...
        "react/jsx-uses-vars": "off",
        "react/no-is-mounted": "off"
    }
}
```
