# LIMS Javascript Connectors

## SDK Dev Workflow

### Prerequisites

#### Node.js

Before you can start working on the Firebase JS SDK, you need to have Node.js
`6.11.5` or greater installed on your machine. 

To download Node.js visit https://nodejs.org/en/download/.

_NOTE: You can use a tool like [`NVM`](https://github.com/creationix/nvm)
or [`N`](https://github.com/tj/n) to install and manage multiple node versions_

#### Yarn

In addition to Node.js we use `yarn` to facilitate multi package development.

To install `yarn` follow the instructions listed on their website: 
https://yarnpkg.com/en/docs/install

## Building the SDK

### Introduction

The LIMS JS SDK is built with a series of individual packages that are all
contained in this repository. Development is coordinated via [yarn 
workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) and 
[Lerna](https://lernajs.io/) (a monorepo management tool).

Each package in the `packages` directory, constitute a piece of our
implementation. The SDK is built via a combination of all of these packages
which are published under the [`lims.io` 
scope](https://www.npmjs.com/search?q=scope%3Afirebase) on NPM.

### Helper Scripts

Each package in the `packages` directory exposes a `dev` script. This script
will set up a watcher for development on the individual piece of the SDK. In
addition, there is a top level `dev` script that can be run to start all of the
watch tasks as well as a sandbox server.

You can run the dev script by running the following at the root of the package:

```bash
yarn dev
```