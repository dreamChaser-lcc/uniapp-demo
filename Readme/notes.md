## ttf 图标字体
- font awesome 
- iconfont 阿里矢量图

## uniapp跨域（未解决）

## vite 中使用sass预处理器
- 与vue-cli不同
- 只需要安装sass 不需要node-sass和loader-sass

## 工程化配置
```bash
# git 提交hooks插件
yarn add husky lint-staged  -D
# eslint
yarn add eslint eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
# prettier
yarn add prettier
```
## 部署（未解决）

## canvas 不渲染问题
- 可能需要调用 ctx.drow();
- 可能需要标签添加 canvas-id,type=2d
- 获取 上下文可以通过 uni.createCanvasContext('id')

## 屏幕适配插件（postcss-px-to-viewport）
```bash
 yarn add postcss-px-to-viewport --save-dev
```
postcss.config.js
```
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 1920, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      replace: true, //  是否直接更换属性值，而不添加备用属性
      exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1920 // 横屏时使用的视口宽度
    }
  }
}
```
在vite.config.ts中进行配置,vite中内联postcss配置[详情查看](https://vitejs.cn/config/#css-postcss)
```
export default defineConfig({
 css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: "px",
          viewportWidth: 375,
          unitPrecision: 3,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: ["ignore-"],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
          landscape: false,
          landscapeUnit: "vw",
          landscapeWidth: 568,
        }),
      ],
    },
  },
})
```


## 在线工具

- clip-path裁剪形状 [clippy](https://bennettfeely.com/clippy/)
- 字体图标在线解析[ttf文件在线解析](https://jlwz.cn/tool/iconfont/)
- 在线制作logo [free design](https://www.designevo.com/logo-maker/)
  
## vscode插件
 - koroFileHeader:添加头部注释
 - tree generator 项目目录生成器