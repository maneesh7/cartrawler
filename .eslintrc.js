module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [],
  root: true,
  rules: {
    indent: ['error', 2],
    quotes: ['warn', 'double'],
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
};
