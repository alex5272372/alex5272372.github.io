import js from '@eslint/js'
import html from '@html-eslint/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  {
    files: ['src/js/**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'max-len': ['error', { code: 120, tabWidth: 2 }],
      'no-trailing-spaces': 'error',
      'no-tabs': 'error',
      'no-multi-spaces': 'error',
      'eol-last': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: false }]
    }
  },
  {
    files: ['src/**/*.html'],
    plugins: { html },
    extends: ['html/recommended'],
    language: 'html/html',
    rules: {
      'html/indent': ['error', 2]
    }
  }
])