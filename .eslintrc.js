module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/essential'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': 0,
    'no-constant-condition': 0,
    'prefer-promise-reject-errors': 0
  }
}