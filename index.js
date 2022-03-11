module.exports = {
    extends: [
        './configs/base/index.js',
        "./configs/typescript/index.js"
    ].map(require.resolve)
};
