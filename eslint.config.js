import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
    js.configs.recommended,
    {
        languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
        },
        plugins: {
        '@stylistic': stylistic,
        },
        rules: {
        semi: 'error',
        "indent": "off",
        '@stylistic/indent': "['error', 2]",
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/block-spacing': 'error',
        '@stylistic/comma-dangle': ['error', { objects: 'always-multiline' }],
        },
    },
    {
        ignores: ['client/dist'],
    }
];
