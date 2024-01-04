module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'public'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'simple-import-sort',
    'typescript-sort-keys',
    'import',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'import/no-unresolved': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:typescript-sort-keys/recommended',
      ],
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      rules: {},
    },
  ],
}
