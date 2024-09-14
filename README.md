# Chrome Extension Boilerplate: React + JavaScript + TailwindCSS

This project provides a boilerplate for creating Chrome extensions using React, JavaScript, and TailwindCSS.

## Features

- React 18 for building user interfaces
- JavaScript for scripting
- TailwindCSS for styling
- Webpack for bundling
- Development and production configurations

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/chrome-extension-boilerplate-react-js.git
   ```

2. Navigate to the project directory:
   ```
   cd chrome-extension-boilerplate-react-js
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Development

To start the development server:

```
npm start
```

This will watch for file changes and rebuild your extension.

### Production Build

To create a production build:

```
npm run build
```

This will create a `dist` folder with your bundled extension and a `dist/output.zip` file ready for submission to the Chrome Web Store.

## Project Structure

- `src/`: Contains the source code for your extension
- `public/`: Contains static assets and the manifest file
- `dist/`: Contains the built extension (after running `npm run build`)
- `webpack.*.js`: Webpack configuration files

## Configuration

- Manifest: `public/manifest.json`
- Webpack: `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`
- Tailwind: `tailwind.config.js`
- Babel: Configured in `webpack.common.js`

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
