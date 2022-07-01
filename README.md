# Intuit Climate 360 Frontend
###### _Practical climate action for SMEs_

This app suggests and tracks actions that SME stakeholders can take to reduce their ecological impact. 

## Quick Start

After cloning the repo get yourself a clean install of the dependencies

```
npm ci
```

to start the development server run

```
npm run dev
```

then head over to http://localhost:3000 to see the app running.

We also have a set of recommended extensions for Visual Studio Code which can be installed via the extensions tab.

## What is this thing anyway?

This is a [Next.js](https://nextjs.org/) project 🕸
It's styled with [Chakra](https://chakra-ui.com/) which is built on [Emotion](https://emotion.sh/docs/introduction) 👩‍🎤 💅
It's got [Typescript](https://www.typescriptlang.org/)🗜
It's got [Storybook](https://storybook.js.org/) 📚
It's got [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) 🧼
It's got [Husky](https://typicode.github.io/husky/#/) 🐶
It's built on [Node v18.4.0](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V18.md#18.4.0) (get [nvm](https://github.com/nvm-sh/nvm) if you don't have it already) 💻

## Scripts

### `dev`

Runs the development server. 

### `build`

Bundles the app in production mode. You probably won't need to run this, that's CIs job.

### `start` 

Runs the bundled app. Again you'll probably never need this, it's for CD.

### `storybook`

Runs the storybook in development mode at http://localhost:6006. Hot reloading is enabled. 

### `build:storybook`

Creates a static bundle of the storybook. Primarily for CI/CD.

### `format`

Runs prettier in write mode. Made loads of changes but forgot to indent anything/wrote everything in one line/used the wrong kind of quotes/used semicolons? Just run this. 

### `lint`

Points out all your mistakes then promptly does nothing about them.

### `lint:fix`

Finds all your mistakes and fixes the ones that it can. 

### `typecheck`

finds type errors for you. 