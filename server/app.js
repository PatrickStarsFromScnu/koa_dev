import path from 'path'
import Koa from 'koa'
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import parameter from 'koa-parameter'

import routers from './routers/index'
import config from './../config/index'

const app = new Koa()

app.use(bodyParser())
app.use(parameter(app))

app.use(koaStatic(
  path.join(__dirname, './../static')
))

app.use(routers.routes()).use(routers.allowedMethods())

export default app // 提供给test模块

app.listen(config.server.port)
console.log(`server is starting at port ${config.server.port} `)
