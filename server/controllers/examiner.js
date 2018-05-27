import experimentsServices from '../services/expriments'

// 工厂模式，根据传入的值生成出对应的controller
const controllerFactory = function (method) {
  return async ctx => {
    let res
    try {
      // 根据对应的 method 执行对应 services 接口
      res = await experimentsServices[method](ctx)
      ctx.body = {
        code: 200,
        msg: `${method}操作成功`,
        res
      }
    } catch (err) {
      console.log(`${method} error:`, err)
    }
  }
}

// 通过工厂函数生成对应的 controller
const addExperiment = controllerFactory('addExperiment')

const getMyExperiments = controllerFactory('getMyExperiments')

const deleteMyExperiment = controllerFactory('deleteMyExperiment')

export default {
  addExperiment,
  getMyExperiments,
  deleteMyExperiment
}