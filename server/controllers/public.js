import experimentsServices from '../services/expriments'

// 工厂模式，根据传入的值生成出对应的controller
const controllerFactory = function (method) {
  return async ctx => {
    let data
    try {
      ctx.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, withCredentials, Accept',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      })
      // 根据对应的 method 执行对应 services 接口
      data = await experimentsServices[method](ctx)
      ctx.body = data
    } catch (err) {
      console.log(`${method} error:`, err)
    }
  }
}

const controllerForOption = function () {
  return ctx => {
    ctx.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, withCredentials, Accept',
      'Access-Control-Allow-Methods': 'GET, OPTIONS'
    })
    ctx.status = 200
  }
}

const getAllExperiments = controllerFactory('getAllExperiments')

const getExperiment = controllerFactory('getExperiment')

const getExperimentsByType = controllerFactory('getExperimentsByType')

const corsOption = controllerForOption()

export default {
  getAllExperiments,
  getExperiment,
  getExperimentsByType,
  corsOption
}
