import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  {
    files: ["src/**/*.test.js", "src/**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];