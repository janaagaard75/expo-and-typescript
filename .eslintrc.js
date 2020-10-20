module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:all",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
        readonly: "generic",
      },
    ],
    // Mandatory return types clutters the code too much.
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // Allow empty Props interfaces.
    "@typescript-eslint/no-empty-interface": "off",

    // Used when importing assets.
    "@typescript-eslint/no-var-requires": "off",

    // Allow unescaped single and double quotes.
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],

    "class-methods-use-this": "off",
    "id-length": "off",
    "max-lines-per-function": "off",
    "no-invalid-this": "off",
    "no-magic-numbers": "off",
    "no-ternary": "off",
    "no-undefined": "off",
    "one-var": "off",
    "prefer-destructuring": "off",
    "sort-imports": "off",
    "sort-keys": "off",
  },
};
