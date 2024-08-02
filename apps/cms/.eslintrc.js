module.exports = {
  root: true,
  extends: ["./../../packages/eslint-config/index.js"],
  rules: {
    "unicorn/filename-case": "off",
  },
  ignorePatterns: ["public/**/*.js"],
};
