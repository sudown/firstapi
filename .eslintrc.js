module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  'options': {
    'no-underscore-dangle': 'allowAfterThis',
  },
  rules: {
    'no-console': 'off',
    'arrow-body-style': 'off',
  },
};
