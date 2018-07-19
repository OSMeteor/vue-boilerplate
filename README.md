# vue-boilerplate
## [Resources](./Resources.md)


## 动态加载组件 
## vue  动态布局

> A [Vue.js](https://cn.vuejs.org/) boilerplate project update time 20180719

#### vendor 
- [vuex](https://vuex.vuejs.org/zh-cn/intro.html)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [vue-axios](https://github.com/imcvampire/vue-axios)
    - [axios](https://github.com/axios/axios)
    - [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) 
- [element](http://element.eleme.io/#/zh-CN)
- [sass](https://www.sass.hk/)
#### 什么时候使用Vuex
-
如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的 [global event bus](https://cn.vuejs.org/v2/guide/components.html#%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1)


```
├── build  # 配置文件
├── index.html 
├── doc  # 项目相关文档建议使用 markdown 语法 书写
├── src
│   ├── api
│       ├── mocks  # mock API 数据
│       └── ... # 抽取出API请求
│   ├── assets  资源文件
│   ├── components  # 公共组件、第三方放在这里 
│   ├── i18n   
│   ├── pages   # 具体业务组件开发
│       └── ... # 具体业务逻辑页面
│   ├── plugin   # 具体业务组件开发 
│   ├── main.js 加载组件 入口
│   ├── config.js  项目配置文件信息
│   ├── router  路由文件
│       └──  index.js  # 路由文件
│   ├── App.vue
│   ├── ...
│   ├── store 
│       ├── index.js          # 我们组装模块并导出 store 的地方   
│       └── modules
│           ├── counter           # 计时器模块    
│               ├── actions.js       
│               ├── getters.js       
│               ├── index.js       
│               ├── mutation-types.js  #便于管理页面上的事件列表     
│               ├── mutation.js        
│               └── state.js       
│           ├── cart.js       # 购物车模块
│           └── products.js   # 产品模块
├── static
├── test

```

## Build Setup

``` bash
# git  clone 
git clone  https://github.com/OSMeteor/vue-boilerplate

cd  vue-boilerplate

# install dependencies
npm install


# serve with hot reload at localhost:8080
npm run dev or npm start


# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


[vue-devtools)](https://github.com/vuejs/vue-devtools#vue-devtools)