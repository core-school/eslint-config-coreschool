module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/core-school",
    "./rules/react",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
