module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-shadow': ['off'],
      'import/prefer-default-export': 'off',
      'prefer-destructuring': ['error', { VariableDeclarator: { array: false } }],
      'no-restricted-syntax': ['off'],
      'no-underscore-dangle': 'off',
      'no-nested-ternary': 'off',
      'max-len': ['error', { code: 120 }],
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
          mocha: true,
        },
  
      },
    ],
  };
  