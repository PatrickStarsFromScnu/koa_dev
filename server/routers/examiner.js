<<<<<<< HEAD

=======
import Router from 'koa-router'
import examinerController from '../controllers/examiner'

let examinerRouter = new Router()

examinerRouter.post('/addExperiment', examinerController.addExperiment)
examinerRouter.get('/getMyExperiment', examinerController.getMyExperiments)
examinerRouter.post('/deleteMyExperiment', examinerController.deleteMyExperiment)

export default examinerRouter
>>>>>>> feature-examiner
