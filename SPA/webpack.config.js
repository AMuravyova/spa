/**
 * Created by amurav on 22.03.2017.
 */

const NODE_ENV=process.env.NODE_ENV || 'development';
module.exports = {
    entry: './app/index.js',
    output: {

        filename: './app/webpack.bundle.js'},
    module:{
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null

};