# AE Studio ESLint Config

[![npm version](https://img.shields.io/npm/v/%40ae-studio%2Feslint-config)](https://www.npmjs.com/package/@ae-studio/eslint-config)
[![npm license](https://img.shields.io/npm/l/%40ae-studio%2Feslint-config)](./LICENSE)

## What's included?

- [Standard config](https://www.npmjs.com/package/eslint-config-standard)
- [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [Typescript plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [React plugin](https://www.npmjs.com/package/eslint-plugin-react)
- [React Hooks plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [JSX A11y plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [Simple Import Sort plugin](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [TailwindCSS plugin](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

## Install

```sh
npm i -D eslint@8 @ae-studio/eslint-config
```

### Next.js

If you're setting up a **Next.js project**, you also need to install the [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) package.

```sh
npm i -D eslint@8 @ae-studio/eslint-config eslint-config-next
```

## Setup

Inside your `.eslintrc.json` file, add the following configuration based on your project type:

### Node.js

```json
{
  "extends": "@ae-studio/eslint-config/node"
}
```

### React

```json
{
  "extends": "@ae-studio/eslint-config/react"
}
```

### React + Tailwind

```json
{
  "extends": [
    "@ae-studio/eslint-config/react",
    "@ae-studio/eslint-config/tailwind"
  ]
}
```

### Next.js

```json
{
  "extends": [
    "next/core-web-vitals",
    "@ae-studio/eslint-config/react"
  ]
}
```

### Next.js + Tailwind

```json
{
  "extends": [
    "next/core-web-vitals",
    "@ae-studio/eslint-config/react",
    "@ae-studio/eslint-config/tailwind"
  ]
}
```

---

Built with 🧡 by [AE Studio](https://ae.studio)
