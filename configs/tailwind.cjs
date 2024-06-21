// Properties and functions to apply the rules of the plugin. For more information, please check
// the documentation.
const callees = ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'cn'];

/** @type import("eslint").Linter.Config */
module.exports = {
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': ['warn', { callees }],
    'tailwindcss/enforces-negative-arbitrary-values': ['warn', { callees }],
    'tailwindcss/enforces-shorthand': ['warn', { callees }],
    'tailwindcss/migration-from-tailwind-2': ['warn', { callees }],
    'tailwindcss/no-arbitrary-value': ['off', { callees }],
    'tailwindcss/no-custom-classname': ['warn', { callees }],
    'tailwindcss/no-contradicting-classname': ['error', { callees }],
    'tailwindcss/no-unnecessary-arbitrary-value': ['warn', { callees }],
  },
};
