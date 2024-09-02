module.exports = {
  root: true,
  extends: ["./../eslint-config/index.js"],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        cases: { pascalCase: true },
        ignore: [
          "^README\\.md$",
          "\\.eslintrc\\.js$",
          "^postcss\\.config\\.js$",
          "^tsconfig\\.json$",
          "^tsconfig\\.lint\\.json$",
          "global\\.d\\.ts",
          /use[A-Za-z]+/,
          "^tailwind\\.js$",
          "^tailwind\\.config\\.js$",
          "^config\\.ts$",
          "^*\\.ts$"
        ]
      }
    ]
  }
};
