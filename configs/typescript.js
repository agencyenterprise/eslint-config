module.exports = {
  overrides: [
    {
      extends: ['./base', 'plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: true,
        tsconfigRootDir: '.',
      },
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'separate-type-imports',
          },
        ],
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      },
    },
  ],
};
