import Router from 'koa-router'
import examinerRouter from './examiner'
<<<<<<< HEAD
import subjectRouter from './subject'
=======
import publicRouter from './public'
>>>>>>> feature-public

let router = new Router()

router.use('/examiner', examinerRouter.routes(), examinerRouter.allowedMethods())
<<<<<<< HEAD
router.use('/subject', subjectRouter.routes(), subjectRouter.allowedMethods())
=======
router.use('/public', publicRouter.routes(), publicRouter.allowedMethods())
>>>>>>> feature-public

export default router
