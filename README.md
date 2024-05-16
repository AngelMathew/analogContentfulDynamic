# Analog App

This project was generated with [Analog](https://analogjs.org), the fullstack meta-framework for Angular.
Using this app we can dynamically specify what components to render based on data from Contentful.

1. Get content data from Contentful.
2. Map content models in Contentful to components in FE.
3. Build components in FE to display the content.

   ![Screenshot 2024-05-16 at 12 31 50 PM](https://github.com/AngelMathew/analogContentfulDynamic/assets/30999892/fbd4d206-4526-4f8f-8823-d14a487a110f)


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
