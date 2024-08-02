// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "turbo",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
    react: {
      rootDir: ["packages/*/"],
      version: "detect",
    },
    "mdx/code-blocks": true,
    "mdx/language-mapper": {},
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
      },
    ],
    "no-unused-vars": ["warn"],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          Props: true,
          props: true,
          generateStaticParams: true,
        },
        replacements: {
          cxt: {
            context: true,
          },
        },
      },
    ],
    curly: [2, "all"],
    "react/no-array-index-key": "error",
    "react/prop-types": "error",
    "react/require-default-props": [
      "error",
      {
        ignoreFunctionalComponents: true,
      },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "Use union literals instead of enums",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  overrides: [
    {
      files: ["*.mdx", "*.md"],
      extends: "plugin:mdx/recommended",
      rules: {
        "unicorn/filename-case": [
          "error",
          { case: "kebabCase", ignore: ["^README\\.md$"] },
        ],
      },
    },
    {
      files: ["*.test.[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/prefer-user-event": "error",
      },
    },
    {
      files: [".eslintrc.js", "tsconfig.json", "postcss.config.js"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "unicorn/no-null": "off",
      },
    },
    {
      files: ["*.ts"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
