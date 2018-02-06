/*
* @Author: limin
* @Date:   2018-01-02 14:59:25
* @Last Modified by:   limin
* @Last Modified time: 2018-01-02 16:25:17
*/
const path = require('path');

//多页面的，怎么获取到每个页面的入口js呢？(提前读取文件夹？获取路径)
const webpackConfig = {
    entry: {
        index: path.resolve(__dirname, 'page/index/index.js'),
        tools: path.resolve(__dirname, 'page/tool/tools.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        alias: {
            '@tools': path.resolve(__dirname, 'tools'),
            '@assets': path.resolve(__dirname, 'assets')
        },
        extensions: ['.js', '.json', '.jsx'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: []
};

module.exports = webpackConfig;
