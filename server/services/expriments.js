import Experiments from '../models/experiments'
import { checkToken } from '../utils/forToken'
import Users from '../models/users'

const addExperiment = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  ctx.verifyParams({
    publisher_id: {
      type: 'int',
      required: true
    },
    publisher_name: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    duration: {
      type: 'string',
      required: true
    },
    pay: {
      type: 'string',
      required: true
    },
    position: {
      type: 'string',
      required: true
    },
    request: 'string',
    period: {
      type: 'string',
      required: true
    },
    others: 'string'
  })
  const body = ctx.request.body
  if (body.experiment_id) {
    return Experiments.create({
      experiment_id: body.experiment_id,
      publisher_id: body.publisher_id,
      publisher_name: body.publisher_name,
      title: body.title,
      type: body.type,
      duration: body.duration,
      pay: body.pay,
      position: body.position,
      request: body.request || '',
      period: body.period,
      others: body.others || '',
      time: body.time
    })
  } else {
    return Experiments.create({
      publisher_id: body.publisher_id,
      publisher_name: body.publisher_name,
      title: body.title,
      type: body.type,
      duration: body.duration,
      pay: body.pay,
      position: body.position,
      request: body.request || '',
      period: body.period,
      others: body.others || '',
      time: body.time
    })
  }
}

// 获取我发布的实验
const getMyExperiments = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  ctx.verifyParams({
    user_id: {
      type: 'string',
      required: true
    }
  })
  const body = ctx.query
  return Experiments.findAll({
    where: {
      publisher_id: parseInt(body.user_id)
    }
  })
}

// 删除我发布的某个实验
const deleteMyExperiment = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  ctx.verifyParams({
    experiment_id: {
      type: 'int',
      required: true
    }
  })
  const body = ctx.request.body
  return Experiments.destroy({
    where: {
      experiment_id: body.experiment_id
    }
  })
}

// 获取所有实验
const getAllExperiments = ctx => {
  // 验证token
  // try {
  //   checkToken(ctx)
  // } catch (err) {
  //   return err
  // }
  return Experiments.findAll({
    include: [{
      model: Users
    }]
  })
}

// 获取特定的实验
const getExperiment = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  ctx.verifyParams({
    experiment_id: {
      type: 'string',
      required: true
    }
  })
  const body = ctx.query
  return Experiments.findOne({
    where: {
      experiment_id: parseInt(body.experiment_id)
    }
  })
}

// 获取一类的实验
const getExperimentsByType = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  ctx.verifyParams({
    type: {
      type: 'string',
      required: true
    }
  })
  const body = ctx.query
  console.log(body)
  return Experiments.findAll({
    where: {
      type: body.type
    }
  })
}

export default {
  addExperiment,
  getMyExperiments,
  deleteMyExperiment,
  getAllExperiments,
  getExperiment,
  getExperimentsByType
}
