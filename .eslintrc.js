const statements = ['if', 'for', 'while', 'do', 'switch', 'try', 'throw', 'class', 'function', 'interface', 'type']
const statementsVariables = ['const', 'let', 'var']
const importAlphabetize = { 'order': 'asc' } // * Alphabetize imports
const importOrder = [
  'type', // * import type
  'builtin',  // * import react
  'external', // * import from node_modules
  'internal', // * import from src
  'parent', // * import from parent folder
  'sibling', // * import from sibling folder
  'index', // * import from index
  'object', // * import from object
  'unknown',
]

module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'plugin:json/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-formatting/recommended',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import', 'jest', 'jest-formatting'],
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'typescript': {}
    }
  },
  'rules': {
    'keyword-spacing': 'off',
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    'quotes': ['error', 'single'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    'padding-line-between-statements': 'off',
    'camelcase': [
      'error',
      {
        allow: [
          'access_token',
          'expires_in',
          'refresh_token',
          'refresh_expires_in',
          'token_type',
          'session_state',
          'client_id',
          'client_secret',
          'grant_type',
          'redirect_uri',
          'decimal_digits',
          'email_verified',
          'preferred_username',
          'given_name',
          'family_name',
          'user_info',
        ],
      },
    ],
  },
  'overrides': [
    {
      'files': ['src/**/*.ts', 'src/**/*.tsx'],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json'
      },
      'rules': {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'warn', // * Do not use `any` type
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'warn', // * Unused variables
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          { 'blankLine': 'always', 'prev': '*', 'next': 'return' }, // * always add a blank line before return
          { 'blankLine': 'always', 'prev': statementsVariables, 'next': statements }, // * always add a blank line before variable statements
          { 'blankLine': 'always', 'prev': statements, 'next': statementsVariables }, // * always add a blank line after variable statements
          { 'blankLine': 'always', 'prev': '*', 'next': statements }, // * always add a blank line before all statements
          { 'blankLine': 'always', 'prev': statements, 'next': '*' }, // * always add a blank line after all statements
        ],
        'eqeqeq': ['error', 'always'], // * always use `===` and `!==
        'eol-last': ['error', 'always'], // * always add a blank line at the end of the file
        'import/no-duplicates': 'error', // * Do not import duplicates
        'import/order': [
          'error',
          {
            'warnOnUnassignedImports': true,
            'alphabetize': importAlphabetize, // * Alphabetize imports
            'newlines-between': 'always', // * always add a blank line between imports
            'pathGroups': [
              {
                'pattern': 'react',
                'group': 'builtin',
                'position': 'before'
              },
            ],
            'pathGroupsExcludedImportTypes': [
              'react',
            ],
            'groups': importOrder
          }
        ],
        'jest/expect-expect': 'error',
        'jest/prefer-expect-assertions': 'error',
        'jest-formatting/padding-around-expect-groups': 'error',
        'no-else-return': 'error',
        'no-return-await': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
        'semi': ['error', 'never'],
      }
    }
  ]
}
