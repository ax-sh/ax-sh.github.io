# https://ax-sh.github.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/44c7f3bc-d97c-40ac-86a9-3a6a25646aff/deploy-status)](https://app.netlify.com/sites/ax-sh/deploys)

# Install commitlint cli and conventional config

yarn add -D @commitlint/{config-conventional,cli}

# For Windows: (optional)

yarn add -D @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# To lint commits before they are created you can use Husky's commit-msg hook:

## Note need to run this on every new repo clone and install as .husky doesnt commit to git

yarn add -D husky
yarn husky install
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
