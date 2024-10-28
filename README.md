# AE Studio ESLint Config

[![npm version](https://img.shields.io/npm/v/%40ae-studio%2Feslint-config)](https://www.npmjs.com/package/@ae-studio/eslint-config)
[![npm license](https://img.shields.io/npm/l/%40ae-studio%2Feslint-config)](./LICENSE)

## What's included?

- [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [Typescript plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [React plugin](https://www.npmjs.com/package/eslint-plugin-react)
- [React Hooks plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [JSX A11y plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [Simple Import Sort plugin](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [TailwindCSS plugin](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

## Install

```sh
npm install -D eslint @ae-studio/eslint-config
```

### Next.js

As described in this [GitHub issue](https://github.com/vercel/next.js/issues/64409), Next.js is still being updated to support ESLint 9. It has partial support for the new config format, but it's not fully compatible yet.

For this reason, you need to install version **2.1.0** of this package to be able to use it with Next.js, and continue using ESLint 8.

```sh
npm install -D eslint@8 @ae-studio/eslint-config@2.1.0
```

For setting out the package, please refer to [v2.1.0 documentation](https://github.com/agencyenterprise/eslint-config/tree/2.1.0).

## Setup

Inside your `eslint.config.mjs` file, add the following configuration based on your project type:

### Node.js

```js
export { default } from "@ae-studio/eslint-config/node";
```

### React

```js
export { default } from "@ae-studio/eslint-config/react";
```

### React + Tailwind

```js
import reactConfig from "@ae-studio/eslint-config/react";
import tailwindConfig from "@ae-studio/eslint-config/tailwind";

export default [...reactConfig, ...tailwindConfig];
```

---

Built with 🧡 by [AE Studio](https://ae.studio)
