import Experiments from '../models/experiments'
import { checkToken, checkSpToken } from '../utils/forToken'
import Users from '../models/users'

/*
*  getAllExperiments，getExperiment，getExperimentsByType
*  等接口会对来自网页版的游客，提供特殊通道，通过checksptoken来验证
*/

const addExperiment = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    ctx.response.status = 401
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
    others: 'string',
    application: {
      type: 'string',
      required: true
    },
    content: 'string'
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
      time: body.time,
      application: body.application,
      content: body.content || ''
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
      time: body.time,
      application: body.application,
      content: body.content || ''
    })
  }
}

// 获取我发布的实验
const getMyExperiments = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    ctx.response.status = 401
    return err
  }
  const body = ctx.params
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
    ctx.response.status = 401
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
  try {
    checkSpToken(ctx)
  } catch (err) {
    ctx.response.status = 401
    return err
  }
  // 类似分页操作，每次要几条，第几次请求
  ctx.verifyParams({
    limit: {
      type: 'string',
      required: true
    },
    offset: {
      type: 'string',
      required: true
    }
  })
  const body = ctx.query
  return Experiments.findAll({
    offset: parseInt(body.offset),
    limit: parseInt(body.limit),
    include: [{
      model: Users
    }]
  })
}

// 获取特定的实验
const getExperiment = ctx => {
  // 验证token
  try {
    checkSpToken(ctx)
  } catch (err) {
    ctx.response.status = 401
    return err
  }
  const body = ctx.params
  return Experiments.findOne({
    include: [{
      model: Users
    }],
    where: {
      experiment_id: parseInt(body.experiment_id)
    }
  })
}

// 获取一类的实验
const getExperimentsByType = ctx => {
  // 验证token
  try {
    checkSpToken(ctx)
  } catch (err) {
    ctx.response.status = 401
    return err
  }
  // 类似分页操作，每次要几条，第几次请求
  ctx.verifyParams({
    limit: {
      type: 'string',
      required: true
    },
    offset: {
      type: 'string',
      required: true
    }
  })
  const body = ctx.query
  console.log(body)
  return Experiments.findAll({
    offset: parseInt(body.offset),
    limit: parseInt(body.limit),
    include: [{
      model: Users
    }],
    where: {
      type: ctx.params.type
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
