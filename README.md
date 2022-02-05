# ax-sh.github.io

# Install commitlint cli and conventional config

yarn add -D @commitlint/{config-conventional,cli}

# For Windows:

yarn add -D @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# To lint commits before they are created you can use Husky's commit-msg hook:

yarn add -D husky
yarn husky install
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
