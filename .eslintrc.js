module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    // Common
    semi: ['error', 'never'],
    'no-nested-ternary': 'error',
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    // Import
    'import/no-absolute-path': 'off',
    // React
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.']
      }
    }
  }
}
