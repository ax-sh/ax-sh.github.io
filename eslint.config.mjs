import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
const patchedConfig = fixupConfigRules([
  ...compat.extends("next/core-web-vitals", "next", "prettier")
]);

const config = [
  ...patchedConfig,
  { plugins: { eslintConfigPrettier } },
  { files: ["tailwind.config.ts"], rules: { "@typescript-eslint/no-require-imports": "off" } },
  {
    plugins: {
      "@typescript-eslint": typescriptEslint
    },

    rules: {
      "@typescript-eslint/ban-ts-comment": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "no-shadow": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-amd": "off"
    }
  },
  { files: ["*/**/main-stacks-section.tsx"], rules: { "@next/next/no-img-element": "off" } },
  // Add more flat configs here
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
      "CHANGELOG.md",
      ".prettier.eslintrc.cjs",
      "____eslint.config.mjs",
      "next-env.d.ts"
    ]
  }
];

export default config;

// export default [
//   ...compat.extends("next/core-web-vitals", "next", "airbnb", "./.prettier.eslintrc.cjs"),

//   {
//     files: ["**/.storybook/*.{ts,js}"],
//
//     rules: {
//       "import/no-mutable-exports": "off",
//       "import/newline-after-import": "off"
//     }
//   },
//   {
//     files: ["**/*.config.{ts,js}", ".release-it.cjs", "eslint.config.mjs", "postcss.config.cjs"],
//
//     rules: {
//       "global-require": "off",
//       "import/newline-after-import": "off",
//       "import/no-named-as-default": "off",
//       "import/no-named-as-default-member": "off",
//       "import/no-mutable-exports": "off"
//     }
//   },
//   {
//     files: ["**/*.test.{ts,tsx}"],
//
//     rules: {
//       "no-undef": "off",
//
//       "import/no-extraneous-dependencies": [
//         "error",
//         {
//           devDependencies: ["**/*.test.ts", "**/*.test.tsx"]
//         }
//       ]
//     }
//   },

// ];
