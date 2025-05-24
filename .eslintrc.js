module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    // General React settings
    react: {
      version: "18", // Automatically detect the React version for non-overridden configurations
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // here the rules added will impact both the js and ts files
    // ADD WITH CAUTION
  },
  overrides: [
    // Apply only to typescript files
    {
      files: ["*.tsx", "*.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/no-require-imports": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
    // Rule for plain javascript files
    {
      files: ["*.jsx", "*.js"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "warn",
        "no-prototype-builtins": "warn",
        "no-unreachable": "warn",
        "react/display-name": "warn",
        "react/jsx-key": "warn",
        "no-empty": "warn",
        "no-empty-pattern": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-case-declarations": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-array-constructor": "off",
      },
    },
  ],
  globals: {
    // Declare global variables here
    process: "writable",
    module: "writable",
    require: "writable",
  },
};
