const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

let resolve = {
    alias,
    extensions: ['.js', '.jsx', '.css'],
};

let sassLoader = {
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
};

let babelLoader = {
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
};

let babelRules = {
    test: /.(js|jsx)$/,
    include: [path.resolve(__dirname, 'src')],
    use: babelLoader,
};

module.exports = (env) => {
    // defaults when there's no env
    let safeEnv = env || {
        mode: 'development',
    };

    let { mode } = safeEnv;

    let sassRulesBase = {
        test: /.s[ac]ss$/i,
    };

    let sassRulesClient = {
        use: [
            safeEnv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            sassLoader,
        ],
        ...sassRulesBase,
    };

    let sassRulesServer = {
        test: /.s[ac]ss$/i,
        use: [
            'css-loader',
            sassLoader,
        ],
        ...sassRulesBase,
    };

    return [
        /* CLIENT CONFIG */
        {
            mode,
            entry: {
                index: ['react-hot-loader/patch', './src/index.jsx'],
            },
            output: {
                filename: '[name].[contenthash].js',
                path: path.resolve(__dirname, 'dist'),
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new ProgressPlugin(),
                new HtmlWebpackPlugin({
                    template: safeEnv.mode === 'production' ? 'html/template.prod.html' : 'html/template.dev.html',
                }),
            ],
            resolve,
            externals: safeEnv.mode === 'production' ? {
                react: 'React',
                'react-dom': 'ReactDOM',
            } : { },

            module: {
                rules: [
                    sassRulesClient,
                    babelRules,
                ],
            },
            devServer: {
                static: {
                    directory: path.join(__dirname, 'public'),
                },
                hot: true,
                open: true,
            },
        },
        /* SERVER CONFIG */
        {
            mode,
            entry: {
                app: './src/components/Page/Index/index.jsx',
            },
            output: {
                filename: '[name].webpack.js',
                path: path.resolve(__dirname, 'server'),
            },
            plugins: [new ProgressPlugin()],
            resolve,
            externals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },

            module: {
                rules: [
                    sassRulesServer,
                    babelRules,
                ],
            },
            target: 'node',
        },
    ];
};
