import Router from 'koa-router'
import subjectController from '../controllers/subject'

let subjectRouter = new Router()

subjectRouter.post('/subscriptions', subjectController.addSubscription)
subjectRouter.delete('/subscriptions', subjectController.deleteSubscription)
subjectRouter.get('/my_subscriptions/:user_id', subjectController.getMySubscription)
subjectRouter.get('/my_subscription_ids/:user_id', subjectController.getMySubscriptionId)

export default subjectRouter
