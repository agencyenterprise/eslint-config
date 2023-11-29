module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
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
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/enforces-negative-arbitrary-values': 'off',
    'tailwindcss/enforces-shorthand': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'off',
  },
};
