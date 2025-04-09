import globals from 'globals'
import pluginJest from 'eslint-plugin-jest'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import json from '@eslint/json'
import markdown from '@eslint/markdown'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    flat: true,
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: false,
  }),
  {
    rules: {
      'no-console': 'error',
      'sort-imports': ['error', { allowSeparatedGroups: true }],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    },
  },
  {
    // update this to match your test files
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  { files: ['**/*.json'], ignores: ['package-lock.json'], language: 'json/json', ...json.configs.recommended },
  { files: ['**/*.jsonc'], language: 'json/jsonc', ...json.configs.recommended },
  { files: ['**/*.json5'], language: 'json/json5', ...json.configs.recommended },
  ...markdown.configs.recommended,
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm' },
]
