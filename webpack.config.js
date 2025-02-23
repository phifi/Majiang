const version = require('./package.json').version;
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    entry:  {
        majiang:   './src/js/majiang.js',
        index:     './src/js/index.js',
        sanma:     './src/js/sanma.js',
        autoplay:  './src/js/autoplay.js',
        netplay:   './src/js/netplay.js',
        rule:      './src/js/rule.js',
        paipu:     './src/js/paipu.js',
        paili:     './src/js/paili.js',
        hule:      './src/js/hule.js',
        drill:     './src/js/drill.js',
        dapai:     './src/js/dapai.js',
        paiga:     './src/js/paiga.js',
    },
    output: {
        path:     __dirname + '/dist/js/',
        filename: `[name]-${version}.js`
    },
    optimization: {
        minimizer: [ new TerserPlugin({extractComments: false}) ],
    },
    devServer: {
        static: {
            directory: __dirname + '/dist',
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        watchFiles: [
            path.resolve(__dirname, 'src/html/**/*.pug'),
            path.resolve(__dirname, 'src/css/**/*.styl'),
            path.resolve(__dirname, '../majiang-core/src/**/*'),
            path.resolve(__dirname, '../majiang-ai/src/**/*'),
            path.resolve(__dirname, '../majiang-ui/src/**/*')
        ],
    },
    watchOptions: {
        ignored: /node_modules/,
    },
};
