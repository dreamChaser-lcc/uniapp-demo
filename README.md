## 项目目录             
uniapp-demo                          
├─ dist                           // 打包文件        
├─ Readme                         // 一些踩坑笔记   
├─ src                               
│  ├─ api                            
│  ├─ component                   // 组件
│  ├─ pages                       // 页面
│  ├─ routes                      // 路由（拦截）   
│  │  └─ interceptor.ts              
│  ├─ static                      // 静态资源
│  ├─ store                       // 状态管理器   
│  ├─ App.vue                     // app应用组件   
│  ├─ env.d.ts                    // 环境声明文件   
│  ├─ main.ts                     // 入口文件     
│  ├─ manifest.json               // 应用清单文件   
│  ├─ pages.json                  // uniapp注册路由和其他配置文件   
│  └─ uni.scss                    // 全局样式   
├─ index.html                    
├─ .eslintrc.json                 // eslint 配置文件   
├─ .prettierrc.js                 // prettier 配置文件        
├─ .prettierrc.js                 // prettier 配置文件      
├─ package.json                      
├─ README.md                         
├─ tsconfig.json                  // ts 配置文件   
├─ vite.config.ts                 // vite 配置文件    
└─ yarn.lock                      // 依赖相关版本锁定信息  

## 相关依赖
| ...            | ...                               |
| -------------- | --------------------------------- |
| 打包及构建工具 | vite2                             |
| 语言           | typescript                        |
| 框架           | vue3.2 , uniapp                   |
| UI组件库       | vk-uview-ui (兼容vue3&vue2)       |
| css预处理器    | sass                              |
| 屏幕适配       | postcss-px-to-viewport(基于vw&vh) |
| 状态管理       | vuex(内置),pinia(未使用)          |
| 代码规范       | husky,lint-staged,eslint,prettier |