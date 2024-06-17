import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginSecurity from 'eslint-plugin-security'
import sonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const unicorn = {
  languageOptions: {
    ecmaVersion: 2024,
    globals: {
      ...globals.node,
    },
  },

  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    'unicorn/better-regex': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
}

const eslintConfigs = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ['.config/*', 'build/', 'dist/', '.xo-config.js', '.*.js'],
  },
]

export default eslintConfigs
