//针对开发环境与生产环境babel的配置
const isDev = process.env.NODE_ENV === 'development';

module.exports = ({
  // 智能预设：能够编译ES6语法
  // presets: [
  //   [
  //     "@babel/preset-env",
  //     // 按需加载core-js
  //     {
  //       useBuiltIns: "usage",
  //       corejs: {
  //         version: "3",
  //         proposals: true
  //       }
  //     },
  //   ],
  // ],
  // 使用react官方规则,可以识别jsx语法。和其他配置
  presets: ["react-app"],
  // cacheDirectory: true, //开启缓存目录，打包更快
  // cacheCompression: false, //禁用压缩，默认为true,通过设置cache:{type:'filesystem'}
  plugins: [
    // "@babel/plugin-transform-runtime", // 禁用了 Babel 自动对每个文件的 runtime 注入，而使所有辅助代码从这里引用，减少重复引入，可以减少代码体积 （presets中包含了）
    isDev && require.resolve("react-refresh/babel"), // 开启js的HMR功能
  ].filter(Boolean),
})
