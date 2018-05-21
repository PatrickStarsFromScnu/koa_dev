import Router from 'koa-router'
import examinerRouter from './examiner'

let router = new Router()

router.use('/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())

export default router
