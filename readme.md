## 架构介绍
一个mvc架构，view层交由前端负责。
由"关注点分离”原则，将项目分为 controllers、models、routers、services层
> routers层
分发来自前端的请求到对应的controller中

> controllers层
处理分发进来的请求，调用对应的services接口处理数据

> service层
提供对数据库的直接操作

> models
通过ORM抽象成对象，对数据的实体定义

## 功能模块分类
功能方面按角色进行模块分类，比如 examiner.js 主试功能模块，subject.js 被试功能模块，public.js大众功能模块（一些没有具体归类的功能），还有 auth.js 权限模块

## 项目目录
```
├── config  # 配置文件
├── server  # 后端代码目录
|   ├── app.js # 后端服务入口文件
|   ├── codes/ # 提示语代码目录
|   ├── controllers/    # 操作层目录
|   ├── models/ # 数据模型model层目录
|   ├── routers/ # 路由目录
|   ├── services/   # 业务层目录
|   ├── utils/  # 工具类目录
|
|—— test # 测试目录
|──  package.json 
|—— .eslintrc.js # 代码规范
|—— .babelrc  # 配置es6
```

代码规范参考
[JavaScript Standard Style](https://github.com/standard/standard/blob/master/RULES.md)

## npm scripts
```
"scripts": {
  "start": "nodemon ./server/app.js --exec babel-node",
  // 通过nodemon启动项目，并执行babel-node
  "test": "mocha --require babel-register --require babel-polyfill"
  // 启动mocha测试，并首先通过require引入babel-register和babel-polyfill
}
```

## 插件 || 中间件
```
"dependencies": {
  "koa": "^2.5.1",     
  "koa-bodyparser": "^4.2.0",  // 处理post请求，讲上下文的formData数据解析到ctx.request.body
  "koa-router": "^7.4.0"       // 封装了路由
  "koa-static": "^4.0.2"       // 处理静态资源服务
  "koa-session-minimal": "^3.0.4", // 提供了存储介质的读写接口
  "koa-mysql-session": "0.0.2",    // 提供MySQL数据库的session数据读写操作
  "mysql2": "^1.5.3", // mysql模块，node操作MySQL的引擎，可以在node.js环境下对MySQL数据库进行建表，增、删、改、查等操作。
  "sequelize": "^4.37.8"，  // mysql的一个orm
  "koa-parameter": "^3.0.1", 参数验证
}
"devDependencies": {
  "babel-cli": "^6.26.0",      // 引入babel-node，可以直接允许es6代码
  "babel-core": "^6.26.3",
  "babel-polyfill": "^6.26.0",
  "babel-preset-env": "^1.6.1", // 使用包括es2015，es2016等的代码
  "babel-preset-stage-0": "^6.24.1", // 可以使用state-0（或更高）阶段的代码
  "babel-register": "^6.26.0", // 实时编译require加载的模块代码
   // babel

  "eslint": "^4.19.1",
  "eslint-config-standard": "^11.0.0",
  "eslint-plugin-import": "^2.11.0",
  "eslint-plugin-node": "^6.0.1",
  "eslint-plugin-promise": "^3.7.0",
  "eslint-plugin-standard": "^3.1.0"
  // eslint

  "nodemon": "^1.17.4", // 在修改并保存代码后自动重启项目
  "mocha": "^5.1.1",    // 一个测试框架
  "chai": "^4.1.2",     // 用来进行测试断言的库，比如判断 1 + 1是否等于 2
  "supertest": "^3.0.0" // http请求测试库，用来请求api接口
}
```

## 最近修改
util中添加了checksptoken方法，来自网页的请求提供特殊的权限
对getAllExperiments, getExperiments, getExperimentByType 免去基本权限检验，通过checksptoken来进行检验。
