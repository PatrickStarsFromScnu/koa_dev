import Router from 'koa-router'
import subjectController from '../controllers/subject'

let subjectRouter = new Router()

subjectRouter.post('/addSubscription', subjectController.addSubscription)
subjectRouter.get('/getMySubscription', subjectController.getMySubscription)
subjectRouter.get('/getMySubscriptionId', subjectController.getMySubscriptionId)

export default subjectRouter
