Monorepo demo
==================

This repo is using `yarn workspace` to manage multiple packages:

1. There is a `package.json` at the root;
2. `app` can specify its dependency on `mylib` in its `package.json`;


## Babel

### Config

- In root, there is a `babel.config.js`, that is for the whole repo, 
- Each package can have a `.babelrc.js`,
- In each package's webpack config, if you specify `rootMode` to be `upward` for `babel-loader`, then Babel will merge `.babelrc.js` to `babel.config.js`

  ```sh
  ...
  loader: 'babel-loader',
  options: {
    rootMode: 'upward',
  }
  ...
  ```

### Transpile a dependency package

`app` is depending on `mylib`, when you build `app`, if you want to transpile `mylib` as well, you need to config the `resolve.symlinks` and `module.rules[0].exclude` options, check `packages/app/webpack.config.all.js`

In `app`, with
  - `yarn build`: `mylib` is not transpiled
  - `yarn build-all`: `mylib` is transpiled (the arrow function is transpiled to a normal function)

