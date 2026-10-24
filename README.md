# @x12i/authix-sdk usage example

Consumer SDK for verifying and introspecting Authix tokens.

This consuming application demonstrates **verify a locally issued token through the consumer sdk** using the published npm package, pinned to `1.0.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Verify a presented Authix token in a consuming application.
- Inspect feature and domain-access claims through the consumer SDK helpers.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/authix-sdk)
- [Implementation monorepo](https://github.com/x12i/authix)
- [Reviewed package source](https://github.com/x12i/authix/tree/dc63d85812526248b1dade3f25131205c36be51f/packages/token-sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
