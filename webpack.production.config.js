const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'bumper': './src/bumper.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'/static/'
    },
    mode: 'production',
    optimization: {
        splitChunks:{
            chunks: "all",
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    module:{
        rules:[
           
            {
                test: /\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
                
        ]
    },
    plugins: [
        
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello-world',
            chunks: ['hello-world', 'vendors~hello-world~bumper'],
            template: 'src/page-template.hbs',
            filename: 'hello-world.html',
            description: 'Some description',
            
        }),
        new HtmlWebpackPlugin({
            title: 'bumper',
            chunks: ['bumper', 'vendors~hello-world~bumper'],
            template: 'src/page-template.hbs',
            filename: 'bumper.html',
            description: 'Bumper',
            
        })
    ]
};