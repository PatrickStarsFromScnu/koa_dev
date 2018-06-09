import {request} from './register'

function authTest () {
  describe('start test: auth', () => {
    it.only('test login', async () => {
      await request
        .post('/auth/login')
        .send({
          code: '033miD6j0o514o1awh8j04h17j0miD6d'
        })
        .expect(200)
    })
  })
}

export default authTest
