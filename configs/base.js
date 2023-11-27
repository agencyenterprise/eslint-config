module.exports = {
  env: {
    browser: true,
    node: true,
    amd: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  plugins: ['import', 'unused-imports'],
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

    // Import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'type'],
        'alphabetize': { order: 'asc', orderImportKind: 'desc' },
        'newlines-between': 'always',
        'distinctGroup': false,
        'pathGroupsExcludedImportTypes': ['builtin'],
      },
    ],
  },
};
