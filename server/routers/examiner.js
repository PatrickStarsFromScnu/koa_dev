import Router from 'koa-router'
import examinerController from '../controllers/examiner'

let examinerRouter = new Router()

examinerRouter.post('/experiments', examinerController.addExperiment)
examinerRouter.delete('/experiments', examinerController.deleteMyExperiment)
examinerRouter.get('/my_experiments/:user_id', examinerController.getMyExperiments)

export default examinerRouter
