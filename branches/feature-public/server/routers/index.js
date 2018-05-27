import Router from 'koa-router'
import examinerRouter from './examiner'
import publicRouter from './public'

let router = new Router()

router.use('/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())
router.use('/public', publicRouter.routes(), publicRouter.allowedMethods())

export default router
