import Router from 'koa-router'
import examinerController from '../controllers/examiner'

let examinerRouter = new Router()

examinerRouter.post('/addExperiment', examinerController.addExperiment)
examinerRouter.get('/getMyExperiments', examinerController.getMyExperiments)
examinerRouter.post('/deleteMyExperiment', examinerController.deleteMyExperiment)

export default examinerRouter
