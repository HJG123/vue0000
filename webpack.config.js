const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            { test: /\.css$/, use:['style-loader','css-loader'] },
            { test: /\.less$/, use:['style-loader','css-loader','less-loader'] },
            { test: /\.scss$/, use:['style-loader','css-loader','sass-loader'] },
            { test: /\.(jpg|png|jpeg)$/, use:'url-loader?limit=true&name=[hash:8]-[name].[ext]'},
            { test: /\.(eot|ttf|woff|woff2|svg)$/,use:'url-loader' },
            { test: /.js$/, use:'babel-loader', exclude:/node_modules/ },    //将JS高级语法转换成低级语法
            { test: /\.vue$/, use:'vue-loader' }
        ]
    },
    resolve:{
        alias:{
            /* "vue$":"vue/dist/vue.js" */
        }
    }
};