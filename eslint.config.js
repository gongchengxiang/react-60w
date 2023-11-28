import antfu from '@antfu/eslint-config';

export default await antfu(
    {
        stylistic: {
            indent: 4, // 4, or 'tab'
            quotes: 'single', // or 'double'
            semi: true,
        },
        typescript: true,
        react: true,
    },
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'unused-imports/no-unused-vars': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
);
