const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    watch: true,
    entry: ['./src/index.js', './scss/main.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [{ loader: 'file-loader', options: { name: 'assets/[name].[ext]' } },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(handlebars|hbs)$/,
                use: ['handlebars-loader'],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        inline: true,
        open: true,
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new MinifyPlugin(),
        new OptimizeCssAssetsPlugin(),
    ],
};
