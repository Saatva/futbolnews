const path = require('path');

module.exports = {
  // So parent files don't get applied
  root: true,
  globals: { preval: false },
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: { sourceType: 'module' },
  env: { es6: true, browser: true, node: true },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', path.resolve(__dirname, './src')],
          ['components', path.resolve(__dirname, './src/components')],
          ['store', path.resolve(__dirname, './src/store')],
          ['types', path.resolve(__dirname, './src/types')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx'],
      },
    },
    react: { version: '16.8.6' },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prefer-object-spread': 'error',
    'no-underscore-dangle': 'off',
    'consistent-this': ['error', 'self'],
    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': ['error', { allow: ['error'] }], // airbnb is using warn
    'prefer-destructuring': 'off', // airbnb is using error. destructuring harm grep potential.
    'no-param-reassign': 'off', // airbnb use error

    'react/jsx-fragments': ['error', 'syntax'],
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] }, // airbnb is using .jsx
    ],
    'react/no-find-dom-node': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': ['error'],
    'import/order': ['warn'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: { browser: true, es6: true, node: true },
      extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      plugins: ['unused-imports'],
      globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true, modules: true },
        ecmaVersion: 2019,
        sourceType: 'module',
        project: path.resolve(__dirname, './tsconfig.json'),
      },
      rules: {
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'no-underscore-dangle': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'unused-imports/no-unused-imports': 'error',
        'sort-imports': ['error', { ignoreMemberSort: false, ignoreDeclarationSort: true }],
      },
    },
  ],
};
