/** @type import(eslint).Linter.Config */
module.exports = {
  env: {
    browser: true,
    node: true,
    amd: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: ['eslint:recommended'],
  plugins: ['import', 'unused-imports', 'simple-import-sort'],
  rules: {
    // Format
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
    'multiline-ternary': ['error', 'always-multiline'],
    'react/no-unescaped-entities': 'off',

    // Import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
    'unused-imports/no-unused-imports': 'error',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^dotenv', '^@config'],
          ['^\\u0000'],
          ['^node:'],
          ['^react', '^next', '^@?\\w'],
          ['^'],
          ['^\\.'],
          ['^.+\\u0000$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
