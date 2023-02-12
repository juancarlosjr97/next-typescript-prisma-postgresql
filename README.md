# Next TypeScript Prisma PostgreSQL Project

[![Development](https://github.com/juancarlosjr97/next-typescript-prisma-postgresql/actions/workflows/development.yml/badge.svg)](https://github.com/juancarlosjr97/next-typescript-prisma-postgresql/actions/workflows/development.yml)

This project is to demonstrate how to setup a project using [Next.js](https://nextjs.org/learn/foundations/about-nextjs) with TypeScript as a web application with Prisma as the ORM using PostgreSQL v15 as the data source as a Full Stack Web App.

## Prerequisites

The following services are require for development:

- [GIT](https://git-scm.com/)
- [nvm](https://github.com/nvm-sh/nvm)
- [Docker](https://docs.docker.com/get-docker/)

## Project Setup

### Dependencies

1. Fork the project and clone your GitHub project

   ```bash
   git clone https://github.com/${USER_NAME}/quick-id-verification
   ```

2. Install node and npm version of the project

   ```bash
   nvm use
   npm install -g npm@${NPM_VERSION}
   ```

3. Install project dependencies

   ```bash
   npm ci
   ```

4. Copy `.env`

   ```bash
   cp .env-local .env
   ```

### Start Database

1. Start the database using Docker

   ```bash
   npm run docker
   ```

2. Import migration to Database

   ```bash
    npm run prisma:deploy
   ```

The command will import the migrations created to the database.

### Start the Next app

1. Start the Next app

   ```bash
   npm run dev
   ```

The app will be running on the port `3000` and accessible in `http://localhost:3000`

## Test

To run tests is required to have the web app running.

1. Run unit and E2E tests

   ```bash
   npm run test
   ```

2. Run coverage check

   ```bash
   npm run test:coverage:check
   ```

## Development with Codespaces

The app has a predefined Codespaces configuration available at `.devcontainer/devcontainer.json` as this web app has been developed using Codespaces.

Follow this [guide](https://docs.github.com/en/codespaces/getting-started/quickstart) on how to get started with Codespaces.

## Acknowledgment

The project has been inspired on a [Prisma example](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file.
