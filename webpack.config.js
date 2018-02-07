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
        filename: '[name].js?[hash]',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        alias: {
            '@tools': path.resolve(__dirname, 'tools'),
            '@assets': path.resolve(__dirname, 'assets'),
            '@components': path.resolve(__dirname, 'components')
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
                //不需要写options时，可以直接use数组直接填写loader的名字
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                            //因为html放的目录不一致，假如只写public/的话，就会相对于当前目录去寻找img，就是./public/images/
                            //有个html是放在根目录，其他的放在view里边= =。所以有点尴尬。
                            //输出返回到样式或者js里的图片路径是publicPath/outputPath/imgName
                            publicPath: '/collection/public/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: []
};

module.exports = webpackConfig;
