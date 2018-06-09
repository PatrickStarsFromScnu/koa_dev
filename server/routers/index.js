import Router from 'koa-router'
import examinerRouter from './examiner'
import subjectRouter from './subject'
import publicRouter from './public'
import authRouter from './auth'

let router = new Router()

router.use('/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())
router.use('/subject', subjectRouter.routes(), subjectRouter.allowedMethods())
router.use('/public', publicRouter.routes(), publicRouter.allowedMethods())
router.use('/auth', authRouter.routes(), authRouter.allowedMethods())

export default router
