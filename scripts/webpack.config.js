const { path, abResolve, getStyleLoaders, handleOtherStaticResource, threads, babelConfig } = require("./utils");
const HtmlWebpackPlugin = require('html-webpack-plugin')//均
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");//开发
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//生产
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //生产
const TerserWebpackPlugin = require("terser-webpack-plugin"); //生产
const CopyPlugin = require("copy-webpack-plugin"); //生产

const isDev = process.env.NODE_ENV === 'development';
const useSourcemMap = true
module.exports = {
  mode: isDev ? "development" : 'production',
  devtool: isDev ? "cheap-module-source-map" : useSourcemMap ? 'source-map' : false,
  entry: {
    myindex: abResolve('src/index.jsx')  // 相对路径和绝对路径都行
  },
  output: {
    clean: true,
    path: isDev ? undefined : abResolve("dist/prod"),
    //入口文件的输出名字 ,开发模式下可以在控制台看到请求的是前者路径
    filename: isDev ? "static/js/[name].js" : 'static/js/[name].[contenthash:8].js',
    chunkFilename: isDev ? "static/js/[name].chunk.js" : "static/js/[name].[contenthash:8].chunk.js", 
  },
  resolve: {
    extensions: ['.jsx', '.js', 'json'],
    alias: {
      '@': abResolve('src'),
      '@assets': abResolve('src/assets')
    }
  },
  //加快第二次打包速度，可以省略babel的的缓存配置
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(jsx?)$/,
            include: abResolve('src'),  //这会包括src.jsx?文件，和src目录下的所有文件
            use: [
              {
                loader: 'thread-loader',
                options: {
                  workers: threads,
                },
              },
              {
                loader: 'babel-loader',
                options: babelConfig,
              }
            ],
          },
          {
            test: /\.css$/,
            use: getStyleLoaders(),
          },
          {
            test: /\.less$/,
            use: getStyleLoaders('less-loader')
          },
          {
            test: /\.s[ac]ss$/,
            use: getStyleLoaders('sass-loader')
          },
          handleOtherStaticResource({}),
          handleOtherStaticResource({
            test: /\.(mp4|ogg)$/i,
            type: "asset/resource",
            dir: 'videos',
            maxSize: 150 * 1024
          }),
          handleOtherStaticResource({
            test: /\.(woff2?|ttf|eof)$/i,
            type: "asset/resource",
            dir: 'fonts',
            maxSize: 20 * 1024
          }),
        ]
      }
    ],
  },
  plugins: [
    isDev && new ReactRefreshWebpackPlugin(), // 解决js的HMR功能运行时全局变量的问题
    new HtmlWebpackPlugin({
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源3. 自动去除html注释，但是不能去除script里的注释
      template: abResolve("public/index.html"),
      // filename:'myindex.html',
      inject:'body',
      hash:true,//破坏缓存，会在入口文件的js加上一个hash值。?47683hds812h2893eg
    }),
    !isDev && new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:10].css",//name是入口文件名
      chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev && new CopyPlugin({
      patterns: [
        {
          from: abResolve("public/static"), //如果public下某文件夹与输出文件夹同名，则会报错，这时候就需要更加精确一点，public下的某文件夹的什么内容复制到对应文件夹中去
          to: abResolve("dist/prod/static"),
          // toType: "dir",
          noErrorOnMissing: true, //关闭丢失警告
          globOptions: {
            ignore: ["**/index.html"],
          },
          info: {
            minimized: true,  // Terser不会压缩这里的js
          },
        },
      ],
    }),
  ].filter(Boolean),

  optimization: {
    minimize: !isDev,
    // 压缩的操作
    minimizer: [
      // 压缩css,默认就是生产环境才会压缩
      new CssMinimizerPlugin(),
      // 多线程压缩js
      new TerserWebpackPlugin({
        extractComments: false,//不将注释提取到单独的文件中,如license
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 30000, // 分割代码最小的大小
      maxAsyncRequests: 10, // 按需加载时并行加载的文件的最大数量
      maxInitialRequests: 10, // 入口js文件最大并行请求数量
      cacheGroups: {
        // layouts通常是admin项目的主体布局组件，所有路由组件都要使用的
        // layouts: {
        //   name: "layouts",
        //   test: path.resolve(__dirname, "../src/layouts"),
        //   priority: 40,
        // },
        antd: {
          name: "chunk-antd",
          test: /[\\/]node_modules[\\/]antd(.*)/,
          priority: 30,
        },
        react: {
          name: "chunk-react",
          test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
          chunks: "initial",
          priority: 20,
        },
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 权重最低，优先考虑前面内容
          chunks: "initial",
        },
      },
    },
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime~${entrypoint.name}`,
    // },
  },
  //通过运行指令控制，当没有serve时，不生效
  devServer: {
    host: "localhost", // 启动服务器域名
    port: 8082, // 启动服务器端口号
    open: true, // 是否自动打开浏览器 //open也可以指定自动打开的路径
    hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
    // compress: true,  //启用gzip压缩
    historyApiFallback: true,  //解决historyAPI出现404的问题
    proxy: {
      '/api/zx': {
        target: 'http://',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api/zx": 'api/zx'
        }
      }
    }
  },
  // performance: {
  //   hints: false
  // }
};