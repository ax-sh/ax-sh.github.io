````yaml
#
#jobs:
#  # Build job
#  build:
#    runs-on: ubuntu-latest
#    steps:
#      - name: Checkout
#        uses: actions/checkout@v3
#      #      - name: Detect package manager
#      #        id: detect-package-manager
#      #        run: |
#      #          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
#      #            echo "manager=yarn" >> $GITHUB_OUTPUT
#      #            echo "command=install" >> $GITHUB_OUTPUT
#      #            echo "runner=yarn" >> $GITHUB_OUTPUT
#      #            exit 0
#      #          elif [ -f "${{ github.workspace }}/package.json" ]; then
#      #            echo "manager=npm" >> $GITHUB_OUTPUT
#      #            echo "command=ci" >> $GITHUB_OUTPUT
#      #            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
#      #            exit 0
#      #          else
#      #            echo "Unable to determine package manager"
#      #            exit 1
#      #          fi
#
#      - name: Setup pnpm
#        uses: pnpm/action-setup@v2.2.4
#        with:
#          version: 8.6.1
#
#      - name: Set up Node
#        uses: actions/setup-node@v3
#        with:
#          node-version: 20
#          cache: "pnpm"
#
#      - name: Setup Pages
#        uses: actions/configure-pages@v3
#      - name: Restore cache
#        uses: actions/cache@v3
#        with:
#          path: |
#            .next/cache
#          # Generate a new cache whenever packages or source files change.
#          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/pnpm-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
#          # If source files changed but packages didn't, rebuild from a prior cache.
#          restore-keys: |
#            ${{ runner.os }}-nextjs-${{ hashFiles('**/pnpm-lock.json', '**/yarn.lock') }}-
#
#      - name: Install dependencies
#        run: pnpm install --no-frozen-lockfile
#      - name: Build with Next.js
#        run: pnpm next build
#      - name: Upload artifact
#        uses: actions/upload-pages-artifact@v1
#        with:
#          path: ./out
#
#  # Deployment job
#  deploy:
#    environment:
#      name: github-pages
#      url: ${{ steps.deployment.outputs.page_url }}
#    runs-on: ubuntu-latest
#    needs: [build]
#    steps:
#      - name: Deploy to GitHub Pages
#        id: deployment
#        uses: actions/deploy-pages@v2
##  test:
##    name: test using bun
##    runs-on: ubuntu-latest
##    steps:
##      # ...
##      - uses: actions/checkout@v4
##      - uses: oven-sh/setup-bun@v1
##
##      # run any `bun` or `bunx` command
##      - run: bun install
##      - run: bun vitest run
#
#jobs:
#  build:
#    runs-on: ubuntu-latest
#    steps:
#      # ...
#      - name: Checkout 🛎️
#        uses: actions/checkout@v4
#      - name: Setup Bun.js ⚙️ - Cache dependencies ⚡ - Install dependencies 🔧
#        uses: oven-sh/setup-bun@v1
#      - name: Setup Pages ⚙️
#        uses: actions/configure-pages@v4
#        with:
#          static_site_generator: next
#      - name: Restore cache
#        uses: actions/cache@v3
#        with:
#          path: |
#           .next/cache
#           # Generate a new cache whenever packages or source files change.
#           key: ${{ runner.os }}-nextjs-${{ hashFiles('**/pnpm-lock.json', '**/yarn.lock', '**/bun.lockb') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
#           # If source files changed but packages didn't, rebuild from a prior cache.
#           restore-keys: |
#           ${{ runner.os }}-nextjs-${{ hashFiles('**/pnpm-lock.json', '**/yarn.lock', '**/bun.lockb') }}-
#      - name: Install dependencies
#        run: bun install --no-frozen-lockfile
#      - name: Build with Next.js 🏗️
#        run: bunx next build
#      - name: "Listing dir"
#        run: "ls"
##  deploy:
##    runs-on: ubuntu-latest
##    needs:
##      - build
##    steps:
##      - name: "Listing dir"
##        run: "ls"
#      - name: Upload artifact 📡
#        uses: actions/upload-pages-artifact@v1
#        with:
#          path: ./out
##          overwrite: true
##```
````
