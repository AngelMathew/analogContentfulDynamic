# Analog App + Contentful

This project was generated with [Analog](https://analogjs.org), the fullstack meta-framework for Angular.
Using this app we can dynamically specify what components to render based on data from Contentful.

1. Get content data from Contentful.
2. Map content models in Contentful to components in FE.
3. Build components in FE to display the content.

<img width="885" alt="Screenshot 2025-03-20 at 6 50 54 PM" src="https://github.com/user-attachments/assets/c999fd8b-c90c-44e8-bfa4-9a3e208c202a" />
<img width="1258" alt="336164914-56441482-13a0-4ace-9440-5c8b1ad6deed" src="https://github.com/user-attachments/assets/ae973350-d5f6-4cad-a487-b75a5d519df2" />



## Setup

Run `npm install` to install the application dependencies.

## Development

Set an environment variable, using a `.env` file.
```
VITE_ANALOG_PUBLIC_BASE_URL="http://localhost:5173"
SPACE=<contentful-space>
ACCESS_TOKEN=<contentful-access-token>
```
Run `npm start` for a dev server. Navigate to `http://localhost:5173/`. The application automatically reloads if you change any of the source files.

## Build

Run `npm run build` to build the client/server project. The client build artifacts are located in the `dist/analog/public` directory. The server for the API build artifacts are located in the `dist/analog/server` directory.

## Test

Run `npm run test` to run unit tests with [Vitest](https://vitest.dev).

## Community

- Visit and Star the [GitHub Repo](https://github.com/analogjs/analog)
- Join the [Discord](https://chat.analogjs.org)
- Follow us on [Twitter](https://twitter.com/analogjs)
- Become a [Sponsor](https://github.com/sponsors/brandonroberts)
