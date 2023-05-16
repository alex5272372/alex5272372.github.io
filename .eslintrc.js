module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    'no-multi-spaces': 'error',
    'eol-last': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': true, 'objectsInObjects': false }],

    '@html-eslint/indent': ['error', 2]
  }
}
