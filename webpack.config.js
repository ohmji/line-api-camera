var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
module.exports = {
    entry: './src/index.js',
    
    output: {
        publicPath: '/',    
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
      },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        contentBase: "./build"
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:3000'
        })
    }
}
