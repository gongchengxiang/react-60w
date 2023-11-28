import antfu from '@antfu/eslint-config'

export default await antfu(
    {
        stylistic: {
            indent: 4, // 4, or 'tab'
            quotes: 'single', // or 'double'

        },
        typescript: true,
    },
    {
        rules: {
            // 'no-unused-vars': 'warn',
            // 'no-console': 'warn',
            // 'unused-imports/no-unused-vars': 'warn',
        },
    },
)
