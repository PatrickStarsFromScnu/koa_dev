import path from 'path'
import Koa from 'koa'
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'

// import routers from './routers/index'
import config from './../config/index'

const app = new Koa()

app.use(bodyParser())

app.use(koaStatic(
  path.join(__dirname, './../static')
))

// app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.server.port)
console.log(`server is starting at port ${config.server.port} `)

const Sequelize = require('sequelize')
const sequelize = new Sequelize('my_test_database', 'root', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
