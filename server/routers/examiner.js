import Router from 'koa-router'
import examinerController from '../controllers/examiner'

let examinerRouter = new Router()

examinerRouter.get('/publish', examinerController.publish)

export default examinerRouter
