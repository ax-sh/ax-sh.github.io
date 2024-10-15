import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginSecurity from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import * as tseslint from "typescript-eslint";

const compat = new FlatCompat();

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

const storybookConfig = compat.config({
  extends: [
    "plugin:storybook/recommended",
    "next/core-web-vitals",
    "next/typescript"
    // other extends
    // eslintPluginStorybook.configs.recommended,
  ],
  rules: {
    "storybook/no-uninstalled-addons": "off",
    "storybook/hierarchy-separator": "off",
    "storybook/prefer-pascal-case": "off",
    "storybook/story-exports": "off"
  },
  ignorePatterns: ["!.storybook", "storybook-static"]
});
const eslintConfigs = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  ...storybookConfig,

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
