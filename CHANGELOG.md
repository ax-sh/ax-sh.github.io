# Changelog

All notable changes to this project will be documented in this file.

## [1.19.0] - 2024-10-16

### ⚙️ Miscellaneous Tasks

- Update changelog command in release config

## [1.18.0] - 2024-10-16

### ⚙️ Miscellaneous Tasks

- Update release hooks for version bump process
- *(release)* Update release workflow and messages
- Update changelog command in release-it config
- *(release-it)* Update changelog command options
- Update release commit and tag messages
- Add CHANGELOG
- Update changelog command in release config
- Add CHANGELOG
- Update changelog command formatting
- Update CHANGELOG generation command in release-it config
- Release v1.18.0

## [1.15.0] - 2024-10-16

### 🚀 Features

- Add TypeScript ignore comment for Obfuscate usage
- Add manifest for portfolio app
- Add default configuration for git-cliff
- Add TimelineSection component and update config files
- Add nextjs eslint
- *(next.config.js)* Add CDN domains for images
- *(timeline-section)* Add children prop to TimelineItemLine

### 🚜 Refactor

- Change type from any to unknown in onSubmit
- Rename contactFormFields to ContactFormFields
- *(contact)* Specify name type for ErrorMessage component
- Enable Storybook builder in config file
- Update imports and improve state handling
- Convert .release-it.js to .release-it.mjs

### 📚 Documentation

- Update TODO with release automation notes
- Update TODO with new tasks for automation

### 🎨 Styling

- Fix formatting inconsistencies in code files
- *(package.json)* Fix quotes in pr:push script
- *(package.json)* Fix quote usage in pr:deploy script
- Update comment for clarity on ts-expect-error
- Update ESLint config file pattern and formatting
- Adjust formatting and quotes in config files

### ⚙️ Miscellaneous Tasks

- Update package dependencies and versions
- Update package dependencies to latest versions
- *(package.json)* Rename dev script and update command
- Update biome schema and add format script
- Update lint script and add new dependency
- Add @hookform/error-message dependency
- Update release hooks and ESLint config formatting
- Update dependencies and add knip script
- Update package versions in package.json
- Add initial CI workflow configuration
- Add local CI command for spelling checks
- Update CI configuration and script names
- Update release hooks in configuration file
- Add new command for pull request creation
- Fix command substitution syntax in package.json
- Update pr:push script in package.json
- Add spell check workflow to CI configuration
- *(package.json)* Update pr:edit command syntax
- *(package.json)* Update pr:push command for dry run
- Update CI workflow for PR checks and remove show job
- Update biome schema version to 1.9.3
- Update GitHub Actions workflow and package.json scripts
- Update PR commands in package.json
- Add job to update PR description automatically
- *(package.json)* Update deploy script for GitHub PRs
- Update lint:fix command in package.json
- Comment out update PR description job
- Add Knip configuration file and update workflow comments
- Update dependencies in package.json
- Remove obsolete dev script from package.json
- Remove eslintConfig from package.json
- Update ESLint config and package dependencies
- Update package.json and fix timeline-section text
- Add GitHub Actions release workflow configuration
- Rename release-it configuration file to .cjs
- Update module export syntax in config file
- Clean up release-it hooks configuration

### Build

- *(deps)* Bump next from 14.2.5 to 14.2.10 (#33)
- Add git-cliff dependency to package.json
- Add changelog command to package.json
- Add new GitHub command for PR creation
- Update pr:push command for correct base branch
- Add new scripts for pull request handling
- Update react-query dependencies to latest version

## [1.14.0] - 2024-09-03

### ⚙️ Miscellaneous Tasks

- Rename .release-it.mjs to .release-it.js for compatibility with CommonJS
- Release v1.13.0 https://ax-sh.github.io/
- Update dependencies and add dev:turbo script
- Remove binary files from the repository
- Update test command in release-it configuration
- Update .gitignore to ignore .DS_Store files
- Clean up commented code and formatting issues
- Update release-it hook command for testing
- Update README for clarity on dev server command
- Release v1.14.0 https://ax-sh.github.io/

## [1.13.0] - 2024-07-29

### 🎨 Styling

- Update animation duration and adjust markup styles for layout consistency
- Clean up eslint config formatting and update image tags in MainStacksSection component

### ⚙️ Miscellaneous Tasks

- Update version in package.json and improve animations and formatting in various files

### Build

- Add @faker-js/faker dependency to package.json
- Add tailwindcss-radix dependency to package.json

## [1.11.0] - 2024-07-29

### 🎨 Styling

- Format JSON and TypeScript imports for consistency and clarity
- Format code and add alt attributes to images in MainStacksSection component

### ⚙️ Miscellaneous Tasks

- Update biome.json configuration and add biome:migrate script in package.json

## [1.10.0] - 2024-07-29

### 🚀 Features

- Add validator dependency and update contact form schema for phone validation

### 🐛 Bug Fixes

- *(contact)* Add missing key prop to ErrorMessage component in ContactForm

### 🎨 Styling

- *(eslint.config.mjs)* Comment out import statement for FlatCompat in ESLint config

### ⚙️ Miscellaneous Tasks

- Update CHANGELOG and fix typo in external links section comment
- Add initial configuration for typo checking in .typos.toml

## [1.9.0] - 2024-07-29

### 🚀 Features

- Add script for updating npm packages with npm-check-updates
- Add changeset
- Update eslint configs
- Remove eslintignore
- Add vitest types
- Add pretty-quick
- Add work section
- Add pr:deploy script
- Add bump script
- Add bump script
- Add test workflow
- Add test workflow (#25)
- Add test workflow
- Add test workflow
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add bun for dep
- Add test workflow
- Add test workflow
- Add scrollbar
- Add GitHub Actions workflows scripts and status check script
- Add new script "bun:dev" in package.json
- Add storybook
- Add MainStacksSection
- Added infinite scroll animation to stacks section and updated icons
- *(stories)* Add ContactForm component and related Storybook stories
- *(ContactForm)* Enhance form with validation and improved UI elements
- *(ContactForm)* Add custom button component and refactor form submission logic
- Add loading state to contact form submission handling
- Add utility functions and integrate Storybook with new delay feature in contact form
- *(useContactForm)* Add control to form return values for improved form handling

### 🐛 Bug Fixes

- Update devDependencies versions to latest versions
- Vitest types
- Fix binary file differences in bun.lockb
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci
- Ci deploy
- Ci deploy
- Ci deploy

### 🚜 Refactor

- *(Contact)* Update form validation using zod and adjust form fields and error handling
- *(Contact)* Move contact form logic to a separate hook and clean up imports
- Rename use-contact-form and update import path in Contact.tsx
- Rename contactFormForm to contactFormFields for clarity and consistency
- Remove unused Button and Header components along with their stories and styles
- Rename .release-it.js to .release-it.mjs for module syntax update
- Update variable names and clean up unused imports in contact form components
- *(contact-form)* Remove commented budget selection from contact form code
- *(contact-form)* Update contact form schema and clean up unused code in UI component

### 📚 Documentation

- Update package.json with "type": "module" and add "clean" script
- Remove minor changeset files and update version to 1.7.0
- Add new links to TODO.md and update command in package.json

### 🎨 Styling

- Update eslint config formatting and quotes
- Update id attribute in WorkSection component
- Update package.json with new command for code formatting
- *(Contact)* Update input styles and integrate clsx for conditional class names

### ⚙️ Miscellaneous Tasks

- Release v1.6.0 https://ax-sh.github.io/
- Ignore .next folder eslint
- Update deps and types
- Remove module type from package
- Fix
- Add bun testing workflow and update id attribute in WorkSection
- Updated dependencies for the latest versions
- Updated the `ExternalLinksSection` component to include a new icon.
- Merge develop
- Rename use-data-query.tsx to use-data-query.ts

## [1.6.0] - 2024-01-15

### 🚀 Features

- Update script
- Update script
- Remove depricated functions
- Add depcheck
- Add depcheck
- Add depcheck

### ⚙️ Miscellaneous Tasks

- Release v1.5.0 https://ax-sh.github.io/

## [1.5.0] - 2024-01-15

### ⚙️ Miscellaneous Tasks

- Release v1.4.0 https://ax-sh.github.io/
- Update deps
- Update eslint config

## [1.4.0] - 2024-01-15

### 🚀 Features

- Update releaseNotes
- Add animated hero image
- Add links to experiments
- Add links to experiments
- Add links to experiments
- Add links to experiments
- Add external links component
- Add external links component

### 🚜 Refactor

- Add external links component
- Add external links tests

### ⚙️ Miscellaneous Tasks

- Release v1.3.0 https://ax-sh.github.io/

## [1.3.0] - 2024-01-14

### 🚀 Features

- Update releaseNotes

### ⚙️ Miscellaneous Tasks

- Release v1.2.0 https://ax-sh.github.io/

## [1.2.0] - 2024-01-14

### 🚀 Features

- Update releaseit
- Update releaseit

### ⚙️ Miscellaneous Tasks

- Release v1.1.0 https://ax-sh.github.io/

## [1.1.0] - 2024-01-14

### 🚀 Features

- Add oxlint

### ⚙️ Miscellaneous Tasks

- Release v1.0.0 https://ax-sh.github.io/

## [1.0.0] - 2024-01-14

### 🚀 Features

- Add custom commit message

### ⚙️ Miscellaneous Tasks

- Release v0.37.0 https://ax-sh.github.io/

## [0.37.0] - 2024-01-14

### 🚀 Features

- Add custom commit message
- Add custom commit message
- Add custom commit message

### ⚙️ Miscellaneous Tasks

- Release v0.36.0

## [0.36.0] - 2024-01-14

### 🚀 Features

- Add env file parser env
- Add lighthouse dev dep
- Add lighthouse local script
- Add lighthouse local script
- Add css to test
- Deprecate script
- Add biome
- Add biome
- Add biome
- Add biome
- Add biome
- Add biome
- Add biome

### ⚙️ Miscellaneous Tasks

- Release v0.35.0

## [0.35.0] - 2024-01-11

### 🚀 Features

- Add env file parser

### ⚙️ Miscellaneous Tasks

- Release v0.33.0

## [0.33.0] - 2024-01-11

### 🚀 Features

- Add @nxext/react:init
- Add vitest and its config
- Wip
- Add commit lint
- Init app
- Change base href
- Add gh-pages
- Add deploy script to package.json
- Add deploy config
- Add vite config
- Add windicss
- Update title
- Add styles
- Add bg image
- Add analytics
- Add dev only debug condition
- Add external links
- Add external icons
- Fixed position of footer
- Add common lib
- Add work section
- Add languages
- Add stacks
- Update deploy command
- Add pretty-quick --staged
- Change title
- Change spacing
- Update wrapper
- Update wrapper
- Move wrapper
- Update config
- Add new stacks
- Add new stacks
- Add new stacks
- Add new stacks
- Update vite config
- Add tailwind preset
- Add windicss to load libs classess
- Add clsx
- Update react router
- Add about section
- Update deps
- Add pages to vite config
- Add pages to vite config
- Import routes
- Add easier routing
- Add styled components
- Add GenderToggleButton to libs
- Add GenderToggleButton to libs
- Add google font
- Add google font
- Add component
- Update navbar
- Update navbar
- Update description
- Update description
- Update description
- Add tooltip Languages
- Add git tooltip
- Add new stacks
- Add new stacks
- Add new stacks
- Add d3
- Add d3
- Add d3
- Update package.json
- Add react hook forms
- Add react hook forms
- Add react hook forms contact section
- Add react hook forms contact section
- Add react hook forms field
- Add react hook forms field
- Add meta tag
- Add qrcode and other helper on server start
- Add qrcode and other helper on server start
- Add semantic-release
- Add minifier
- Add flex wrap
- Add vite pwa
- Hide unneeded
- Add sonos
- Add sonarjs
- Add props
- Add props
- Add standard-version
- Add change logs
- Add nx nextjs lib
- Add portfolio for next.js
- Update vitetest config
- Upgrade vtest
- Update packages
- Add layout
- Add SEO
- Add layout
- Add next.js user-agent package
- Add layout
- Ignore auto gen files
- Improve seo
- Add pwa
- Update author
- Add netlify config
- Update build dir in netlify config
- Add netlify badge
- Add build script
- Add changelog
- Add standard version hooks
- Add change log
- Wip
- Add netlify
- Add script
- Add project file
- Add projects section
- Add project section
- Update self summary
- Pwa
- Add minify option
- Add html en
- Add eslint arbnb
- Add contact section
- Revamp hire icon
- Add scroll
- Add rhf
- Add google sheet api
- Add works link
- Add new script
- Add hotjar code
- Add loader on contact submit
- Add contact api
- Add zod schema
- Improve validation
- Add packages
- Wip
- Wip
- Wip
- Add gsap
- Add hooks
- Kill scroll trigger on unmount
- Wip
- Update
- Add semver for nx
- Wip
- Wip
- Add
- Wip
- Add icons
- Add icons
- Update seo
- Add more icons
- Update icon
- Simplify skill icons
- Add new links
- Add project images
- Add loader component
- Add email
- Add analytics
- Add google analytics
- Add validation
- Improve SEO
- Improve SEO
- Add toast message on form submit
- Add toast message on form submit
- Add bg icon on nextjs app
- Refactor
- Wip
- Wip
- Add webpack tailwind windicss
- Add webpack tailwind windicss
- Update seo
- Add windicss
- Add windicss in next
- Clsx
- Add deploy script
- Add hooks and contact
- Render on client side contact
- Add contact to coming soon page
- Add gsap
- Add client side component
- Add client side wrapper
- Add gsap on hero section
- Add timeline
- Add seo skill
- Add gsap
- Change work link
- Update
- Upgrade
- Update package
- Wip
- Update seo
- Update meta description
- Add scroll to top component
- Update seo
- Migrate nx
- Dont use pnpm
- Add use array ref
- Add generics
- Add timeline hook
- Add another animation
- Hide marker
- Fix animation
- Change config
- Update link
- Add .idea ignore
- Forget idea
- Add ga4
- Remove hardcoded ga4
- Update packages
- Add script command
- Add command
- Start rewrite-2024
- Start rewrite-2024
- Start rewrite-2024
- Add commit lint
- Add commit lint
- Add commit lint
- Add commit lint
- Add commit lint
- Add prettier
- Add prettierrc
- Add lint stage config
- Add lint stage config
- Add lint stage config
- Update deploy script
- Update deploy script
- Update deploy script
- Update deploy script
- Update deploy script
- Update deploy script
- Update deploy script
- Update deploy script
- Update deploy script
- Update
- Update deploy script
- Add new banner
- Add react-obfuscate
- Add react-obfuscate
- Add react-obfuscate
- Add react-obfuscate
- Add @icons-pack/react-simple-icons
- Add @icons-pack/react-simple-icons
- Add @icons-pack/react-simple-icons
- Add @icons-pack/react-simple-icons
- Add @icons-pack/react-simple-icons
- Add description
- Add vitest (#5)
- Add description
- Add badge
- Add badge
- Add badge (#7)
- Add badge (#8)
- Test (#9)
- Add badge
- Add hotjar dep
- Add-react-query dev tools
- Feature/add-static-json (#12)
- Add hotjar tracking (#14) (#15)
- Add hotjar tracking (#14)
- Update node ver
- Update node ver
- Add feature/add-skeleton-loader
- Add feature/add-skeleton-loader
- Update eslint
- Add eslint for airbnb
- Add devto link
- Add devto link
- Add typesafety
- Add prettier eslint config
- Add prettier eslint config
- Add prettier eslint config
- Add prettier eslint config
- Add prettier eslint config
- Add prettier eslint config
- Add prettier eslint config
- Add banner section
- Add vitest react test
- Add vitest react test
- Add vitest react test
- Add vitest react test
- Add vitest react test
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add release-it cmd
- Add notag option on git flow release
- Enable push on release
- Enable push on release
- Enable github release
- Enable github release
- Enable github release push

### 🐛 Bug Fixes

- Deploy to github command
- Serve portfolio form nx
- Nav menu distance
- Color
- React lib
- Responsiveness
- Responsiveness
- Tailwind in lib
- Tailwind in lib
- Linter
- Style
- Routing
- Navbar
- Navbar
- Responsiveness
- Responsiveness
- Responsiveness
- Responsiveness
- Remove link styles
- Hero section
- Layout
- Api by using airtable and nocodeapi
- Ux
- Ux hire button position
- Ux
- Ux
- Submitting button
- Props
- Ver
- Form
- @apply scss error
- Email
- Responsiveness of project section
- Responsivess
- Bg
- Condition
- Windicss not working on shared common components
- Timeline
- Windicss on nextjs
- Header
- Nextjs config
- Gsap
- Animation
- Animation
- Type
- Import
- Animation
- Redundent
- Ts relative input
- Hydration error
- Hydration error
- Hydration error
- Temp hotfix
- Temp hotfix

### 🚜 Refactor

- Components
- Components
- Move components to common lib
- Hire me button
- Component
- Footer component
- Footer component
- Move component to global lib
- Move component to global lib
- Move component to global
- Fix colors
- Fix colors
- Fix colors
- Move list to global lib
- Components
- Icon logic
- Form
- Modularity
- Move to global component
- Gsap
- Const
- Hotjar code
- Hotjar code
- Folder structure
- Clean

### 📚 Documentation

- Update readme
- Update

### 🧪 Testing

- Release-it config (#17)
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script
- Release-it config script

### ⚙️ Miscellaneous Tasks

- Update dict
- Ove files
- Move files
- Clean code
- Fix linter
- Update workspace dist
- Update nx
- *(release)* 0.0.1
- *(release)* 0.0.2
- Prettier
- *(release)* 0.0.3
- Remove default css
- *(release)* 9.9.9
- Wip
- Wip
- Wip
- Wip
- *(release)* 9.10.0
- *(release)* 0.0.6
- Automated release add
- Ntl deploy
- Fix nextjs netlify deploy
- Add script for netlify deploy
- *(release)* Null
- Wip
- Fix
- Add to dist
- Update dist
- Migrate to react 18 mount
- Nx migrate
- Nx migrate
- Update package
- Update nx
- Package
- Migrate nx
- Upgrade packages
- Fix
- Merge develop
- Change tracking code
- Change tracking code
- Resolve conflicts
- Fix eslint  errors
- Fix eslint  errors
- Release v0.2.0
- Release v0.3.0
- Release v0.4.0
- Release v0.5.0
- Release v0.6.0
- Release v0.24.0
- Release v0.25.0
- Release v0.26.0
- Release v0.27.0
- Release v0.28.0
- Release v0.29.0
- Release v0.30.0
- Release v0.31.0
- Release v0.32.0

<!-- generated by git-cliff -->
