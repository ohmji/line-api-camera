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
                test: /\.js$/,
                include: path.resolve('./index.js'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: require('./.babelrc'),
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        // New plugin
        new HtmlWebpackPlugin({
          // injects bundle.js to our new index.html
          inject: true,
          // copys the content of the existing index.html to the new /build index.html
          template:  path.resolve('./index.html'),
        }),
      ],
    devServer: {
        historyApiFallback: true,
        contentBase: "./build",
        open: true,
        compress: true,
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://76ea8cb5.ngrok.io'
        })
    }
}

