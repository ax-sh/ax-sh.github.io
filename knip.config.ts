import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/index.ts", "scripts/{build,create}.js"],
  project: ["src/**/*.ts", "scripts/**/*.js"],
  ignoreDependencies: [
    "git-cliff",
    "@faker-js/faker",
    "husky",
    "is-ci",
    "tsx",
    "oxlint",
    "@tanstack/react-query-devtool"
  ],
  ignoreBinaries: ["gh", "jq", "nr", "act"]
};

export default config;
