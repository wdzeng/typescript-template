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

## Further Reading

You must not include `type: module` in the package.json file when configuring the `moduleResolution`
to use `node16` in tsconfig. This is due to a stupid new policy that mandates the inclusion of the
`.js` file extension in import statements, even when working with TypeScript files. You can find
more information about this policy [here](https://github.com/microsoft/TypeScript/issues/40878).
