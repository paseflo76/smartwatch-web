export default [
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error'
    }
  }
]
