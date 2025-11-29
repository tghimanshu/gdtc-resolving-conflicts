# Resolving Conflicts

This Angular application demonstrates a simple user management system with profile viewing capabilities. It was originally created to test how developers resolve git conflicts but serves as a functional example of an Angular application using Angular Material.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Build](#build)

## Project Structure

The project is structured as a standard Angular CLI application:

- `src/app/components`: Contains the main feature components.
  - `users`: Displays a list of users fetched from an external API.
  - `profile`: A placeholder component for user profiles.
- `src/app/profiles`: Contains specific user profile implementations.
  - `himanshu-profile`: A specific profile component.
- `src/app/services`: Contains services for data fetching and business logic.
  - `users.service.ts`: Service to fetch user data from `https://jsonplaceholder.typicode.com/users`.
- `src/app/shared`: Contains shared components.
  - `header`: The application header/navigation bar.

## Features

- **User List**: Fetches and displays a list of users including their ID, name, username, email, phone, and website.
- **Material UI**: Uses Angular Material for consistent and modern UI components (Tables, Toolbars, Buttons, etc.).
- **Routing**: Basic routing between the user list and profile pages.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need Node.js installed. This project was built using Angular CLI, which requires Node.js.
- **npm**: npm is usually installed with Node.js.

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd resolving-conflicts
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1.  Start the development server:
    ```bash
    npm start
    ```
    Or directly with Angular CLI:
    ```bash
    ng serve
    ```

2.  Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running Tests

To execute the unit tests via [Karma](https://karma-runner.github.io):

```bash
npm test
```
Or:
```bash
ng test
```

## Build

To build the project for production:

```bash
npm run build
```
Or:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
