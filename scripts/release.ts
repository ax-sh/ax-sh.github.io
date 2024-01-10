import { $ } from 'execa';
import fs from 'fs-extra';
import path from 'path';

const Release = {
  async run(): Promise<void> {
    await this.switchToDefaultBranch();

    await this.startReleaseBranch();

    // await standardVersion({
    //     silent: true,
    // });
    //
    // await this.finishReleaseBranch();
  },
  async switchToDefaultBranch() {
    const cmd = await $`git branch --show-current`;
    console.log(cmd.stdout);
  },
  async startReleaseBranch() {
    const nextVersion = await this.getNextVersion();
  },
  async getNextVersion() {
    const currentVersion = await this.getCurrentVersion();
    console.log(currentVersion.version);
  },
  getCurrentVersion() {
    return fs.readJson(path.join(process.cwd(), 'package.json'));
  }
};

void Release.run();
