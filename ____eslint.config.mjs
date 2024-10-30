import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

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
    "next",
    "next/core-web-vitals",
    "next/typescript"
    // other extends
    // eslintPluginStorybook.configs.recommended,
  ],
  rules: {
    "storybook/no-uninstalled-addons": "off",
    "storybook/hierarchy-separator": "off",
    "storybook/prefer-pascal-case": "off",
    "storybook/story-exports": "off",
    "@next/next/no-duplicate-head": "off"
  },
  ignorePatterns: ["!.storybook", "storybook-static"]
});
const eslintConfigs = [
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  ...storybookConfig,
  { files: ["*/**/main-stacks-section.tsx"], rules: { "@next/next/no-img-element": "off" } },
  { files: ["tailwind.config.ts"], rules: { "@typescript-eslint/no-require-imports": "off" } },

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
