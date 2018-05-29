import Experiments from '../models/experiments'

const addExperiment = ctx => {
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

<<<<<<< HEAD
=======
// 获取我发布的实验
>>>>>>> feature-public
const getMyExperiments = ctx => {
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

<<<<<<< HEAD
=======
// 删除我发布的某个实验
>>>>>>> feature-public
const deleteMyExperiment = ctx => {
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

<<<<<<< HEAD
export default {
  addExperiment,
  getMyExperiments,
  deleteMyExperiment
=======
// 获取所有实验
const getAllExperiments = ctx => {
  return Experiments.findAll()
}

// 获取特定的实验
const getExperiment = ctx => {
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
>>>>>>> feature-public
}
