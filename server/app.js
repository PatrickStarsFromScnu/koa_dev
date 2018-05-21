import path from 'path'
import Koa from 'koa'
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'

import routers from './routers/index'
import config from './../config/index'

const app = new Koa()

app.use(bodyParser())

app.use(koaStatic(
  path.join(__dirname, './../static')
))

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.server.port)
console.log(`server is starting at port ${config.server.port} `)
