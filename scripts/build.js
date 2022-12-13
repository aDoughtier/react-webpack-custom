const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const {merge} = require('webpack-merge')

process.env.NODE_ENV = "production"
const isAnaluzer = process.env.analyzer == 'true'
const config = require('./webpack.config')
module.exports = merge(config,{
  plugins:[
    isAnaluzer && new BundleAnalyzerPlugin()
  ].filter(Boolean)
})