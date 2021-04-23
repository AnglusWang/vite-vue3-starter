module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
        'plugin:prettier/recommended' // 添加 prettier 插件
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector:
                    "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                message: 'Unexpected property on console object was called'
            }
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/no-multiple-template-root': 'off'
    }
}
