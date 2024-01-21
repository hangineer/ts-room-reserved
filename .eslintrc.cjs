/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'typescript'
  ],
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'eqeqeq': 'warn',
    'prefer-const': ['off', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'semi': ['error', 'always'],
  },
  env: {
    node: true,
    browser: true
  }
};
