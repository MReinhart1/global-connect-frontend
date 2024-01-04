*Update ESLint*
- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- [Verify that this is needed] Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- [Verify that this is needed] Optionally add `plugin:@typescript-eslint/stylistic-type-checked`

- Set up reusable axios apis
- Set up more state
- Start working on the login page
