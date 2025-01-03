/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import eslintJs from '@eslint/js';
import typescriptEslint from "typescript-eslint";
import reactEslint from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

const files = ['**/*.{j,t}s{x,}'];
const testFiles = ['**/__tests__', '**/__testutils___', '**/__mocks__']
    .map(dir => `${dir}/${files[0]}`)
    .concat(['src/setupTests.{j,t}s']);

export default [
  eslintJs.configs.recommended,
  reactEslint.configs.flat.recommended,
  ...typescriptEslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      'jsx-a11y': jsxA11y
    },
    files,
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
        require: true,
        process: true,
        document: true,
      },

      ecmaVersion: 2018,
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      camelcase: ['error', {
        properties: 'never',
      }],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', {
        null: 'ignore',
      }],
      'no-caller': 'error',
      quotes: ['error', 'single'],
      'no-undef': 'error',
      'no-unused-vars': 'off',
      strict: 'error',
      'no-nested-ternary': 'off',
      'vars-on-top': 'off',
      'no-console': ['error', {
        allow: ['warn', 'error'],
      }],

      'no-debugger': 'error',

      'react/no-unescaped-entities': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/display-name': 'off',

      '@stylistic/max-len': ['error', {
        code: 120,
      }],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',

      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
      }],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/padded-blocks': 'off',
      '@stylistic/key-spacing': 'error',
      '@stylistic/space-unary-ops': ['error', {
        words: false,
        nonwords: false,
      }],
      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'ignore',
        named: 'never',
      }],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/semi': 'off',
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/keyword-spacing': ['error', {}],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/object-property-newline': ['error', {
        allowMultiplePropertiesPerLine: true,
      }],
      '@stylistic/brace-style': ['error', 'stroustrup', {
        allowSingleLine: true,
      }],
      '@stylistic/jsx-indent-props': ['error', 'first'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'never'],
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline',
      }],
      '@stylistic/jsx-closing-tag-location': ['error'],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        MemberExpression: 2,
        ObjectExpression: 1,
        VariableDeclarator: 2,

        FunctionDeclaration: {
          parameters: 'first',
        },

        FunctionExpression: {
          parameters: 'first',
        },

        CallExpression: {
          arguments: 2,
        },

        flatTernaryExpressions: true,
        ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute']
      }],
      '@stylistic/semi': ['error', 'always'],

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'no-public',
      }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': ['error', {
        ignoreParameters: true,
      }],
      '@typescript-eslint/no-non-null-assertion': ['error'],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ]
    },
  },
  {
    files: testFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
        require: true,
        document: true,
        jest: true,
        it: true,
        describe: true,
        beforeEach: true,
        afterEach: true,
        expect: true
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  }
];
