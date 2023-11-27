module.exports = {
  extends: ['./base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        endOfLine: 'lf',
        printWidth: 100,
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
      },
    ],
  },
};
