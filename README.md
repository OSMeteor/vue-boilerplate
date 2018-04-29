# vue-boilerplate
## [Resources](./Resources.md)


> A Vue.js boilerplate project update time 20180429

#### vendor 
- [vuex](https://vuex.vuejs.org/zh-cn/intro.html)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [vue-axios](https://github.com/imcvampire/vue-axios)
    - [axios](https://github.com/axios/axios)
- [express-mockjs](https://github.com/52cik/express-mockjs#readme)
    -  [Mock JSON 文档](https://github.com/52cik/express-mockjs/blob/master/README.zh-CN.md)    
#### 什么时候使用Vuex
-
如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的 [global event bus](https://cn.vuejs.org/v2/guide/components.html#%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1)

- [express-mockjs](https://github.com/52cik/express-mockjs#readme)
    -  [Mock JSON 文档](https://github.com/52cik/express-mockjs/blob/master/README.zh-CN.md)

```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块

```

## Build Setup

``` bash
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