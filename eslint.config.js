import globals from 'globals';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

// Base configuration for all files
const baseConfig = {
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    '@next/next': nextPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'error',
  },
};

// TypeScript-specific configuration
const tsConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    ...baseConfig.plugins,
    '@typescript-eslint': tsPlugin,
  },
  languageOptions: {
    ...baseConfig.languageOptions,
    parser: tsParser,
    parserOptions: {
      ...baseConfig.languageOptions.parserOptions,
      project: './tsconfig.json',
    },
  },
  rules: {
    ...baseConfig.rules,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};

// JavaScript configuration
const jsConfig = {
  files: ['**/*.js', '**/*.jsx'],
  ...baseConfig,
};

export default [jsConfig, tsConfig];
