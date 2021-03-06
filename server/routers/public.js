import Router from 'koa-router'
import publicController from '../controllers/public'

let publicRouter = new Router()

publicRouter.get('/experiments', publicController.getAllExperiments)
publicRouter.get('/experiments/:experiment_id', publicController.getExperiment)
publicRouter.get('/experiment_types/:type', publicController.getExperimentsByType)
publicRouter.options('/experiments', publicController.corsOption)
publicRouter.options('/experiments/:experiment_id', publicController.corsOption)
publicRouter.options('/experiment_types/:type', publicController.corsOption)

export default publicRouter
