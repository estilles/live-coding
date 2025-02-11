import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

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
]
