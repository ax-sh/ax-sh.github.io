import { $ } from 'execa';
import fs from 'fs-extra';
import path from 'path';

const Release = {
  async run(): Promise<void> {
    // await this.switchToDefaultBranch();

    await this.startReleaseBranch();
    await $`pnpm release-it`;
    // await this.finishReleaseBranch();
  },
  async switchToDefaultBranch() {
    const cmd = await $`git checkout develop`;
    return cmd.stdout;
  },
  async startReleaseBranch() {
    const nextVersion = await this.getNextVersion();
    const cmd = await $`git flow release start v${nextVersion}`;
    return cmd.stdout;
  },
  async finishReleaseBranch() {
    const cmd = await $`git flow release finish --notag`;
    return cmd.stdout;
  },
  async getNextVersion() {
    const currentVersion = await this.getCurrentVersion();
    // const recommendation = await this.getReleaseType();
    // const version = new SemVer(currentVersion);
    // version.inc(recommendation.releaseType ?? 'minor');
    return currentVersion.version as string;
  },
  getCurrentVersion() {
    return fs.readJson(path.join(process.cwd(), 'package.json'));
  }
  // getReleaseType() {}
};

(async function () {
  try {
    await Release.run();
  } catch (e) {
    console.log(e, 66);
  }
})();
