const path = require("path");
//导入 html-webpack-plugin 插件，得到插件构造函数
const HtmlWebpackPlugin = require("html-webpack-plugin")

//使用Node.js中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    //代表webpack运行的模式，可选值有两个 development 和 production
    //发布上线是用production
    mode: 'development', //指定构建模式，可选项有 development 和 production
    //指定要处理哪个文件
    entry: path.join(__dirname, './src/index1.js'),

    output: {
        //存放到目录
        path: path.join(__dirname, './dist'),
        //生成的文件名
        filename: 'bundle.js',
    },
    plugins: [
        //new构造函数，创建插件的实例对象
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        open: true,
        //在http协议中，如果端口是80，可省略
        port: 8081,
        host: '127.0.0.1'
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // {test:/\.jpg|png|gif$/, use: "url-loader?limit=422327"},
            {
                test: /\.jpg|png|gif$/, use: {
                    loader: "url-loader",
                    options: {
                        limit: 422327
                    }
                }

            },
            {
                test: /\.js$/,
                //排除项
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //参数项：声明插件来转化class中高级语法
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },

                },
            }
        ]
    }
}
