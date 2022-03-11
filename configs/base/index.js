module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: [
        'unicorn',
        'markdown'
    ],
    extends: [
        'plugin:markdown/recommended',
        'plugin:unicorn/better-regex',
    ],
    rules: {
        'indent': ['warn', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'never'],
    }
}
