const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

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
    include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'server')],
    use: babelLoader,
};

function config(mode, ssr){
    let development = mode === 'development';
    let production = !development;

    let sassRulesBase = {
        test: /.s[ac]ss$/i,
    };

    let sassRulesClient = {
        use: [
            development ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            sassLoader,
        ],
        ...sassRulesBase,
    };

    let sassRulesServer = {
        test: /.s[ac]ss$/i,
        use: [
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        exportOnlyLocals: true,
                    },
                },
            },
            sassLoader,
        ],
        ...sassRulesBase,
    };

    let mainPlugins = [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: !ssr ? 'index.html' : path.join('..', 'dist', 'index.html'),
            template: production ? 'html/template.prod.html' : 'html/template.dev.html',
            publicPath: '/',
        }),
    ];

    let clientBase = {
        mode: 'development',
        entry: {
            index: ['react-hot-loader/patch', './src/index.jsx'],
        },
        output: {
            filename: path.join('js', '[name].[contenthash].js'),
            path: path.resolve(__dirname, 'public'),
            publicPath: '/',
        },
        plugins: mainPlugins,
        resolve,
        externals: production ? {
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
            proxy: {
                context: '/api',
                target: 'http://localhost:8081',
            },
            hot: true,
        },
    };

    let serverBase = {
        mode,
        entry: {
            app: './server/server.prod.jsx',
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'server'),
        },
        plugins: [
            new ProgressPlugin(),
        ],
        resolve,
        externals: [nodeExternals()],
        module: {
            rules: [
                sassRulesServer,
                babelRules,
            ],
        },
        externalsPresets: { node: true },
        target: 'node',
    };

    if (ssr) {
        if (development){
            clientBase.devServer.devMiddleware = {
                index: false,
                writeToDisk: (filePath) => filePath.endsWith('html'),
            };

            clientBase.devServer.proxy.context = () => true;
        }
        clientBase.plugins.push(
            new MiniCssExtractPlugin({
                filename: path.join('css', '[name].css'),
            }),
        );
        return [clientBase, serverBase];
    }
    return clientBase;
}

module.exports = {
    config,
};
