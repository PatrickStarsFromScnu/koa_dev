import Router from 'koa-router'
import authController from '../controllers/auth'

let authRouter = new Router()

authRouter.post('/login', authController.login)

export default authRouter
