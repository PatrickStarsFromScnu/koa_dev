import Router from 'koa-router'
import examinerRouter from './examiner'
import subjectRouter from './subject'
import publicRouter from './public'
import authRouter from './auth'

let router = new Router()

router.use('/api/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())
router.use('/api/subject', subjectRouter.routes(), subjectRouter.allowedMethods())
router.use('/api/public', publicRouter.routes(), publicRouter.allowedMethods())
router.use('/api/auth', authRouter.routes(), authRouter.allowedMethods())

export default router
