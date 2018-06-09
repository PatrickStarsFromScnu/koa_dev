import Subscription from '../models/subscription'
import Users from '../models/users'
import Experiments from '../models/experiments'
import { checkToken } from '../utils/forToken'

const addSubsciption = ctx => {
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
    },
    user_id: {
      type: 'int',
      required: true
    }
  })
  const body = ctx.request.body
  return Subscription.create({
    experiment_id: body.experiment_id,
    user_id: body.user_id
  })
}

const getMySubsciption = ctx => {
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
  return Users.findAll({
    include: [{
      model: Experiments,
      through: {
        where: { user_id: parseInt(body.user_id) }
      }
    }]
  })
}

export default {
  addSubsciption,
  getMySubsciption
}
