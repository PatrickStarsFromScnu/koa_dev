import Subscription from '../models/subscription'
import Experiments from '../models/experiments'
import Users from '../models/users'
import { checkToken } from '../utils/forToken'

const addSubscription = ctx => {
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

const deleteSubscription = ctx => {
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
  return Subscription.destroy({
    where: {
      experiment_id: body.experiment_id,
      user_id: body.user_id
    }
  })
}

const getMySubscription = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  const body = ctx.params
  return Subscription.findAll({
    include: [{
      model: Experiments,
      include: [{
        model: Users
      }]
    }],
    where: { user_id: parseInt(body.user_id) }
  })
}

const getMySubscriptionId = ctx => {
  // 验证token
  try {
    checkToken(ctx)
  } catch (err) {
    return err
  }
  const body = ctx.params
  return Subscription.findAll({
    where: {user_id: parseInt(body.user_id)}
  })
}

export default {
  addSubscription,
  getMySubscription,
  getMySubscriptionId,
  deleteSubscription
}
