import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // important for require/module

      globals: {
        ...globals.node,   // Node.js (module, require, etc.)
        ...globals.jest    // Jest (describe, test, expect)
      }
    },

    rules: {
      // You can tweak rules here if needed
      // Example:
      // "no-unused-vars": "warn"
    }
  }
];