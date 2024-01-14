import chalk from "chalk";
import { $, ExecaSyncError } from "execa";
import fs from "fs-extra";
import path from "path";

// @deprecated but works
// use below for running it as cli
//  "release": "tsx ./scripts/release.ts",
const Release = {
  async run(): Promise<void> {
    await this.switchToDefaultBranch();

    await this.startReleaseBranch();
    const prepare = await this.prepareRelease();
    console.log(chalk.green(prepare));
    const finish = await this.finishReleaseBranch();
    console.log(finish);
  },
  async prepareRelease() {
    const releaseType = await this.getReleaseType();
    const cmd = await $`pnpm release-it ${releaseType} --ci`;
    return cmd.stdout;
  },
  async switchToDefaultBranch() {
    const cmd = await $`git checkout develop`;
    return cmd.stdout;
  },
  async startReleaseBranch() {
    const nextVersion = await this.getNextVersion();

    const cmd = await $`git flow release start ${nextVersion}`;
    await $`git push -u  origin HEAD`;
    return cmd.stdout;
  },
  async finishReleaseBranch() {
    const cmd = await $`git flow release finish --notag`;

    return cmd.stdout;
  },
  async getNextVersion() {
    const currentVersion = await this.getCurrentVersion();
    const releaseType = await this.getReleaseType();
    const nextVersionCmd = await $`pnpm release-it ${releaseType} --ci --release-version`;
    const nextVersion = nextVersionCmd.stdout;

    console.table({ currentVersion, nextVersion });
    return nextVersion;
  },
  async getPackageJson() {
    return fs.readJson(path.join(process.cwd(), "package.json"));
  },
  async getCurrentVersion() {
    const data = await this.getPackageJson();
    return data.version as string;
  },
  async getReleaseType() {
    return "minor";
  }
};

(async () => {
  try {
    await Release.run();
  } catch (e) {
    const { stderr, message, shortMessage, escapedCommand, signal, signalDescription, ...rest } =
      e as ExecaSyncError;
    console.error(chalk.red(shortMessage, stderr));
    console.table(rest);
  }
})();
