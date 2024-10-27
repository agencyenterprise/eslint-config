// @ts-check

import tailwind from 'eslint-plugin-tailwindcss';

// Properties and functions to apply the rules of the plugin. For more information, please check
// the documentation.
const callees = ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'cn'];

export default [
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        callees,
      },
    },
  },
];
