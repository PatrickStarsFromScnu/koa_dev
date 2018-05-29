import Router from 'koa-router'
import publicController from '../controllers/public'

let publicRouter = new Router()

publicRouter.get('/getAllExperiments', publicController.getAllExperiments)
publicRouter.get('/getExperiment', publicController.getExperiment)
publicRouter.get('/getExperimentsByType', publicController.getExperimentsByType)

export default publicRouter
