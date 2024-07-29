import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginSecurity from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginStorybook from "eslint-plugin-storybook"


const unicorn = {
  languageOptions: {
    ecmaVersion: 2024,
    globals: {
      ...globals.node
    }
  },

  plugins: {
    unicorn: eslintPluginUnicorn
  },
  rules: {
    "unicorn/better-regex": "error",
    "@typescript-eslint/consistent-type-imports": "error"
  }
};

const eslintConfigs = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  ...compat.config({
    extends: [
      "plugin:storybook/recommended"
      // other extends
    ],
    // .eslintignore is not supported with flat config, make sure to ignore also other build and test folders
    ignorePatterns: ["!.storybook", "storybook-static"]
  }),
  ...eslintPluginStorybook.configs["flat/recommended"],
  {
    ignores: [
      ".config/*",
      "build/",
      "dist/",
      ".xo-config.js",
      ".*.js",
      "node_modules",
      "public",
      ".next",
      "CHANGELOG.md"
    ]
  }
];

export default eslintConfigs;
