import Router from 'koa-router'
import examinerRouter from './examiner'
import subjectRouter from './subject'

let router = new Router()

router.use('/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())
router.use('/subject', subjectRouter.routes(), subjectRouter.allowedMethods())

export default router
