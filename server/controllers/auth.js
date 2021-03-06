import usersServices from '../services/users'

// 工厂模式，根据传入的值生成出对应的controller
const controllerFactory = function (method) {
  return async ctx => {
    let data
    try {
      // 根据对应的 method 执行对应 services 接口
      data = await usersServices[method](ctx)
      ctx.body = data
    } catch (err) {
      console.log(`${method} error:`, err)
    }
  }
}

// 通过工厂函数生成对应的 controller
const login = controllerFactory('login')

export default {
  login
}
