module.exports = {
  extends: ["./rules/best-practices", "./rules/core-school"].map(
    require.resolve
  ),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {},
};
