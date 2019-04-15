const path = require('path');
const htmlWebpackPlugIn = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : './example/index.js',
    output : {
        filename: 'app.bundle.js',
        path: path.join(__dirname, 'example')
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                    presets:['@babel/preset-env', '@babel/preset-react']
                }

            }
        ]
    },
    // plugin: [
    //     new htmlWebpackPlugIn(
    //         {template:'./example/index.html'}
    //     )
    // ]
}