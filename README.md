# TypeScript Template

A TypeScript project template integrates with [ESLint](https://eslint.org/) and
[Prettier](https://prettier.io/).

## Build Project

Use `tsc` and [`@vercel/ncc`](https://github.com/vercel/ncc) to transpile TypeScript files into a
single JavaScript file.

```shell
pnpm build
node ./dist/index.js
```

## Linting

Integrates with ESLint and Prettier. Use ESLint as default formatter if you are developing with
VSCode.

```shell
pnpm lint
```
