# eFishery Frontend Engineer Take-home Assignment

![Image Alt Text](https://rec-data.kalibrr.com/www.kalibrr.com/logos/PEZPUK35ZY94BS848PDZDKW6XZBJWKGSWYNQ62C7-633a6997.png)

## Overview

The Fish Commodity Management System is a Frontend Web Application + (PWA) for managing farmer and price data.

## Prerequisites

- Node.js v20+
- npm

## Tech Stack

- React 18
- Next.js 14 with TypeScript
- Zustand
- React Query
- SCSS
- Zod
- React Hook Form
- Framer Motion
- Next PWA

## Development Dependencies

- Husky
- ESLint
- Prettier
- Jest

## Installation / Run Locally

Clone the project

```bash
git clone https://github.com/raybagas7/eFishery-THT-FE.git
```

Go to the project directory

```bash
cd eFishery-THT-FE
```

Install dependencies

```bash
npm install
```

Environment variable

```bash
cp .env.example .env
```

**_follow the .env.example and fill every variable and base api url with your needs_**

Start the application in Development mode.

```bash
npm run dev
```

**_(Web app will run on port 3000)_**

To build and start the application you can run this command

```bash
npm run build
```

```bash
npm run start
```

**_(Web app will run on port 3000)_**

## Installing the PWA on your Device

To install the Progressive Web App (PWA) on your device, follow these steps:

- Open the application in your web browser.
- If the browser supports PWAs, you should see an option to "Install" or "Add to Home Screen. (Works on phone)" Click on this option.
- Follow the prompts to install the PWA on your device's home screen / setup installer.
- Once installed, you can launch the PWA directly from your device's home screen or shortcut from your desktop, just like any other app.

**Note**: The availability of the "Install" or "Add to Home Screen" option may vary depending on the browser and device you are using.

By following these steps, users will be able to install this application on their devices for easy access and a more app-like experience.

## Development

When you want to continue developing this application, follow these steps:

- **Initialize Husky**: Run the following command to initialize Husky:

  ```bash
  npm run prepare
  ```

  Husky will be initiated, and every time you commit, Husky pre-commit will intercept the commit and run tests before it is committed.

  1.**Prettier Test**: Husky will run a Prettier test. If it fails, you must fix it manually by following the Prettier style or by running:

  ```bash
  npm run write-format
  ```

  2.**Linter Check**: Husky will perform a linting check. If the linter fails, there will be information in the terminal, and you must fix it manually.

  3.**TypeScript Type Checking**: Husky will check TypeScript types. If it passes, the commit will be completed if you have already defined the commit message. If not, you will need to write the commit message.

  4.**Build Test (Optional)**: Additionally, there is a build test included in the pre-commit file. This test is currently commented out to avoid slowing down the development process, as the build process may take some time. If you want to run the build test, uncomment the script in the pre-commit file.

## Running the apps with Docker

Before get into docker build, ensure you have Docker installed on your machine. You can download and install Docker from the . [official website](https://www.docker.com)

Ensure that you have set the .env to the root directory:

```bash
cp .env.example .env
```

**_follow the .env.example and fill every variable and base api url with your needs_**

- **Navigate** to the project when you clone this project already.
- **Build** the Docker image for the Node.js application

  ```bash
  docker-compose build
  ```

- **Run** the Docker container

  ```bash
  docker-compose build
  ```

  docker-compose up

This command will start the Docker container and run the application.

Once the Docker container is running, you can access the Node.js application by opening a web browser and navigating to localhost:3000.

## Testing

This project is covered by two types of tests: unit tests using Jest and end-to-end tests using Cypress.

### Unit Test | Jest

To test the application, you can run unit tests with Jest. To run the tests once, use the following command:

```bash
npm run test
```

If you want to develop more or perform continuous testing, you can run the tests in watch mode:

```bash
npm run test:watch
```

If you want to add more test case, the test directory is on root directory
