module.exports = {
  hooks: {
    "before:init": "pnpm test run",
    "before:beforeBump": [
      "git flow release start v${version}",
      "echo \uD83D\uDC4A before:bump version=v${version} latestVersion=v${latestVersion}"
    ],
    "after:bump": [
      "pnpx auto-changelog -p && git add CHANGELOG.md",
      "echo \uD83D\uDC4A after:bump version=v${version} latestVersion=v${latestVersion}"
    ],
    "after:release": [
      "git flow release finish --notag",
      "echo \uD83D\uDE4C Successfully released ${name} v${version} to ${repo.repository}.",
      "git push origin HEAD",
      "git push origin refs/heads/master:master"
    ]
  },
  git: {
    commitMessage: "chore: release v${version} https://ax-sh.github.io/",
    push: false
  },
  github: {
    releaseName: "Release ${version} ax-sh.github.io",
    release: true,
    releaseNotes(context) {
      // Remove the first, redundant line with version and date.
      const notes = context.changelog.split("\n").slice(1);
      notes.unshift("rocket");
      return notes.join("\n");
    }
  },
  npm: {
    publish: false
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: "angular"
      },
      infile: "CHANGELOG.md"
    }
  }
};
