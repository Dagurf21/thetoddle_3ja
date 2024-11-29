module.exports = {
    extends: ['expo', 'plugin:prettier/recommended'],
    ignorePatterns: ['/dist/*'],
    rules: {
        'prettier/prettier': [
            'error', // Set to 'error', 'warn', or 'off' (0, 1, 2 also work)
            {
                tabWidth: 4,
                singleQuote: true,
                semi: false,
            },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        'no-unused-vars': 1,
        'no-console': 1,
        indent: [2, 4],
        quotes: [2, 'single', { avoidEscape: true }],
    },
}
