module.exports = {
  rules: {
    // strings always in double quotes
    quotes: ["off", "double"],

    // prefer exports with a concrete name if it's a react component
    "import/prefer-default-export": "off",

    // we don't like camel case, prefer snake_case
    camelcase: "off",
  },
};
