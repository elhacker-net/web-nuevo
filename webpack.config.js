const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const alias = require('./webpack.alias.config');
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = (env) => ({
    mode: 'development',

    entry: {
        index: ['react-hot-loader/patch', './src/index.jsx'],
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [new ProgressPlugin(), new HtmlWebpackPlugin({
        template: env.mode === 'production' ? 'html/template.prod.html' : 'html/template.dev.html',
    })],

    resolve: {
        alias,
        extensions: ['.js', '.jsx', '.css'],
    },

    externals: env.mode === 'production' ? {
        react: 'React',
        'react-dom': 'ReactDOM',
    } : { },

    module: {
        rules: [
            {
                test: /.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dirname, 'node_modules/foundation-sites/scss'),
                                    path.resolve(__dirname, './scss'),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',

                options: {
                    plugins: ['react-hot-loader/babel', 'syntax-dynamic-import'],

                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false,
                            },
                        ],
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                },
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true,
        },
    },

    devServer: {
        hot: true,
        open: true,
    },
});
