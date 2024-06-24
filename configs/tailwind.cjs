// Properties and functions to apply the rules of the plugin. For more information, please check
// the documentation.
const callees = ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'cn'];

/** @type import("eslint").Linter.Config */
module.exports = {
  extends: 'plugin:tailwindcss/recommended',
  settings: {
    tailwindcss: {
      callees,
    },
  },
};
