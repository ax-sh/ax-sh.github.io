import { $, ExecaError } from "execa";

async function main() {
  try {
    const { stdout: bumpedVersion } = await $`git-cliff --bumped-version`;
    const { stdout: gitTag } = await $`echo git tag ${bumpedVersion}`;
    const { stdout: gitPush } = await $`git push origin ${bumpedVersion}`;
    console.log("[BUMP Result]", { bumpedVersion, gitTag, gitPush });
  } catch (error) {
    if (error instanceof ExecaError) {
      console.error(error.failed); // true
    }
  }
}
main().then(() => process.exit(0));
