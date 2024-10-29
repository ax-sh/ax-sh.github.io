import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("next/core-web-vitals", "next", "airbnb", "./.prettier.eslintrc.cjs"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
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
            "import/no-amd":"off"
        },
    },
    {
        files: ["**/*.config.{ts,js}"],

        rules: {
            "global-require": "off",
        },
    },
    {
        files: ["**/*.test.{ts,tsx}"],

        rules: {
            "no-undef": "off",

            "import/no-extraneous-dependencies": ["error", {
                devDependencies: ["**/*.test.ts", "**/*.test.tsx"],
            }],
        },
    },
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