module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/admin-practice/'
        : '/',
    outputDir: 'docs',
    css: {
        loaderOptions: {
            sass: {
            }
        }
    },
    lintOnSave: false,
}