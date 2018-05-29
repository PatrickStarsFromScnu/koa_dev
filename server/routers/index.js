import Router from 'koa-router'
import examinerRouter from './examiner'
import subjectRouter from './subject'
import publicRouter from './public'

let router = new Router()

router.use('/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())
router.use('/subject', subjectRouter.routes(), subjectRouter.allowedMethods())
router.use('/public', publicRouter.routes(), publicRouter.allowedMethods())

export default router
