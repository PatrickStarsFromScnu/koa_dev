import subscriptionServices from '../services/subscription'

// 工厂模式，根据传入的值生成出对应的controller
const controllerFactory = function (method) {
  return async ctx => {
    let data
    try {
      // 根据对应的 method 执行对应 services 接口
      data = await subscriptionServices[method](ctx)
      ctx.body = {
        code: 200,
        msg: `${method}操作成功`,
        data
      }
    } catch (err) {
      console.log(`${method} error:`, err)
    }
  }
}

// 通过工厂函数生成对应的 controller
const addSubsciption = controllerFactory('addSubsciption')

const getMySubsciption = controllerFactory('getMySubsciption')

export default {
  addSubsciption,
  getMySubsciption
}
