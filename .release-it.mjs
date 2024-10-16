/**
 https://github.com/release-it/release-it/blob/main/config/release-it.json
 https://github.com/release-it/release-it/blob/main/docs/github-releases.md
 @gen token with scope https://github.com/settings/tokens/new?scopes=repo&description=release-it

 @docs docs https://github.com/release-it/release-it/blob/main/docs/configuration.md
 **/

/** @type {import('release-it').Config} */
export default {
  github: {
    releaseName: "Release ${version} ax-sh.github.io",
    release: true,
    releaseNotes(context) {
      // Remove the first, redundant line with version and date.
      // const notes = context.changelog.split("\n").slice(1);
      const notes = context.changelog.split("\n");
      notes.unshift(":rocket: [https://ax-sh.github.io/](https://ax-sh.github.io/)");
      return notes.join("\n");
    }
  },
  npm: {
    publish: false,
  },
  git: {
    // changelog: 'git log --pretty=format:"* %s (%h)" ${from}...${to}',
    changelog: 'nr git-cliff -l',
    requireCleanWorkingDir: true,
    requireBranch: false,
    requireUpstream: true,
    requireCommits: false,
    requireCommitsFail: true,
    commitsPath: '',
    addUntrackedFiles: false,
    commit: true,
    commitMessage: 'Release ${version}',
    commitArgs: [],
    tag: true,
    tagExclude: null,
    tagName: null,
    tagMatch: null,
    getLatestTagFromAllRefs: false,
    tagAnnotation: 'Release ${version}',
    tagArgs: [],
    push: true,
    pushArgs: ['--follow-tags'],
    pushRepo: '',
  },
  hooks: {
    // 'before:init': [
    //   'which git-cliff',
    //   'nr prettier:fix',
    //   'git commit --allow-empty -am "ci: format files before release"',
    //   'nr lint',
    // ],
    // 'before:beforeBump': [
    //   'git flow release start v${version}',
    //   'echo \uD83D\uDC4A ${name} before:bump latestVersion=v${version} previousVersion=v${latestVersion}',
    // ],
    // 'after:bump': [
    //   'git cliff -o CHANGELOG.md && git add CHANGELOG.md',
    //   'git commit  --allow-empty -am "ci: add CHANGELOG"',
    //   'git flow release finish -n',
    //   // equivalent 'git flow release finish v${version} -m "Release v${version}" -n -p -F --keepremote',
    //   'echo \uD83D\uDC4A ${name} after:bump version=v${version} latestVersion=v${latestVersion}',
    // ],
    // 'after:release': [
    //   'echo \uD83D\uDE4C Successfully released ${name} v${version} to ${repo.repository}.',
    //   // 'git push origin HEAD',
    //   // 'git push origin refs/heads/master:master',
    //   // 'git push origin refs/heads/develop:develop',
    // ],
  },
}