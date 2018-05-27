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

export default {
  addExperiment,
  getMyExperiments,
  deleteMyExperiment
}
