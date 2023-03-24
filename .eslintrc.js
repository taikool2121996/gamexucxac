/* eslint-disable */
const { off } = require("process");

module.exports = {
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
    // Muốn cấu hình theo eslint của airbnb thì bật cái này
    // 'airbnb',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],

    // custom rule
    '@typescript-eslint/no-use-before-define': 0,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
    },
  },
};
