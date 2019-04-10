const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                exclude: path.resolve(__dirname,'node_modules'),
                use: ['babel-loader']
            },
            {
                test:/\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'React Template',
            template: './public/template.html'
          })
    ]
}