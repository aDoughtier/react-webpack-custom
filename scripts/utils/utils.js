// 获取处理样式的Loaders
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//生产
const isDev = process.env.NODE_ENV === 'development';
const getStyleLoaders = (preProcessor) => {
  return [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题,已经包含autoprefixer
          ],
        },
      },
    },
    preProcessor &&
      preProcessor === 'less-loader' ? {
      loader: 'less-loader',
      options: {
        modifyVars: {
          '@primary-color': '#1DA57A',
          '@link-color': '#1DA57A',
          '@border-radius-base': '2px',
        },
        javascriptEnabled: true,//允许js修改less变量
      }
    } : preProcessor
  ].filter(Boolean);
};
//处理图片等静态资源
const handleOtherStaticResource = ({ test = /\.(png|jpe?g|gif|webp)$/, type = "asset", dir = "images", maxSize = 10 * 1024 }) => ({
  test,
  type,
  parser: {
    dataUrlCondition: {
      maxSize // 小于10kB会被base64处理
    }
  },
  generator: {
    // [hash:8]: hash值取8位 [ext]: 使用之前的文件扩展名 [query]: 添加之前的query参数
    filename: `static/${dir}/[name].[hash:8][ext][query]`,
  },
});
//获取cpu核数
const threads = require('os').cpus().length

module.exports = {
  getStyleLoaders,
  handleOtherStaticResource,
  threads,
}