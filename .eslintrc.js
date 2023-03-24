/* eslint-disable */
const { off } = require("process");

module.exports = {
  extends: [
    // 'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'airbnb/hooks',
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
    'import/no-unresolved': 0, // turn on errors for missing imports
    // 'import/no-extraneous-dependencies': 0,
    // 'import/no-duplicates': 0,
    // 'import/import/extensions': 0,
    // 'import/import/no-self-import': 0,
    // 'import/import/no-relative-packages': 0,
    // 'import/no-cycle': [2, { ignoreExternal: true }],
    'react/jsx-filename-extension': [0, { extensions: ['.ts','.tsx'] }],
    // 'react/react-in-jsx-scope': 'off',
    // 'react/jsx-props-no-spreading': [
    //   0,
    //   { html: 'ignore', custom: 'ignore', explicitSpread: 'ignore' },
    // ],
    // 'no-use-before-define': 0,
    // '@typescript-eslint/no-use-before-define': 2,
    // 'import/order': [
    //   2,
    //   {
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'index',
    //     ],
    //     'newlines-between': 'always',
    //   },
    // ],
    // 'import/newline-after-import': 1,
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
