import Router from 'koa-router'
import subjectController from '../controllers/subject'

let subjectRouter = new Router()

subjectRouter.post('/addSubsciption', subjectController.addSubsciption)
subjectRouter.get('/getMySubsciption', subjectController.getMySubsciption)

export default subjectRouter