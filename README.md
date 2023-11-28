# ESLint Config <small>(`@ae-studio/eslint-config`)</small>

---

## Installation

**Using NPM:**
```bash
npm i -D @ae-studio/eslint-config
```

**Using Yarn:**
```bash
yarn add -D @ae-studio/eslint-config
```

## Usage

By default, this config will lint for ES6+. To use it, add the following to your `.eslintrc.*` file:

```json
{
  "extends": "@ae-studio/eslint-config"
}
```

To add typescript support, add the following to your `.eslintrc.*` file instead:

<small>**Note:** You will need to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` as well.</small>

```json
{
  "extends": "@ae-studio/eslint-config/typescript"
}
```

## Format Rules

This config includes the following rules for formatting:

```js
{
  'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
  ],
  'semi': ['error', 'always'],
  'quotes': ['error', 'single'],
  'comma-dangle': ['error', 'always-multiline'],
  'quote-props': ['error', 'consistent-as-needed'],
  'arrow-parens': ['error', 'always'],
  'object-curly-spacing': ['error', 'always'],
  'indent': ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
  'linebreak-style': [1, 'unix'],
}
```

## Prettier Support

This config also includes support for [Prettier](https://prettier.io/). To use it, add the following to your `.eslintrc.*` file:

```json
{
  "extends": ["@ae-studio/eslint-config/prettier"]
}
```

And for Typescript support:

```json
{
  "extends": [
    "@ae-studio/eslint-config/typescript",
    "@ae-studio/eslint-config/prettier"
  ]
}
```

### When you run `eslint --fix`, it will run the prettier plugin first, then the ESLint plugin.

This means that **you don't need to set up two separate commands to run prettier and eslint**. Just run `eslint --fix` and it will do both.

This also means that you should only install / use the ESLint extension in your editor, not the prettier extension. On save, the ESLint extension will run prettier first, then ESLint.

When using the prettier eslint config, it is not necessary to create a ``.prettierrc`` file.
However, if you do, the ESLint prettier config will take precedence over the ``.prettierrc`` config, so only create a ``.prettierrc`` if you want to use plugins not already included.

The following rules are included in the ESLint Prettier config:

<small>**Note:** The prettier plugin disables conflicting format ESLint rules from above.</small>

```js
{
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  quoteProps: 'consistent',
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  arrowParens: 'always',
  importOrder: [
    '<BUILT_IN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[.]',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
}
```

## Other Configs

TailwindCSS support:

<small>**Note:** Useful if you are not using Prettier.</small>

```json
{
  "extends": ["@ae-studio/eslint-config/tailwind"]
}
```

With Typescript:

```json
{
  "extends": [
    "@ae-studio/eslint-config/typescript",
    "@ae-studio/eslint-config/tailwind"
  ]
}
```

## Next.js Support

If you are using Next.js, first extend the Next config and then extend the other configs you want to use:

<small>**Note:** `next/core-web-vitals` extends `next`, so both are not required.</small>

```json
{
  "extends": [
    "next/core-web-vitals",
    "@ae-studio/eslint-config/typescript",
    "@ae-studio/eslint-config/prettier"
  ]
}
```

## Dependencies

`@ae-studio/eslint-config/typescript` requires the following dependencies:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

`@ae-studio/eslint-config/tailwind` requires the following dependencies:

- `eslint-plugin-tailwindcss`

`@ae-studio/eslint-config/prettier` requires the following dependencies:

- `eslint-plugin-prettier`
- `eslint-config-prettier`
- `prettier`
- `prettier-plugin-tailwindcss`
- `@ianvs/prettier-plugin-sort-imports`

If not automatically installed, install each by running:

**Using NPM:**
```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-tailwindcss eslint-plugin-prettier eslint-config-prettier prettier prettier-plugin-tailwindcss @ianvs/prettier-plugin-sort-imports
```

**Using Yarn:**
```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-tailwindcss eslint-plugin-prettier eslint-config-prettier prettier prettier-plugin-tailwindcss @ianvs/prettier-plugin-sort-imports
```
