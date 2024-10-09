const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = {
  env: {
    node: true, // Specify that you are in a Node.js environment
    es2021: true, // You can set the ECMAScript version as needed
  },
  languageOptions: {
    globals: globals.browser,
  },
  extends: [
    // Include your recommended configurations
    pluginJs.configs.recommended,
  ],
};
