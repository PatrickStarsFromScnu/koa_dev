import {request} from './register'

function subjectTest () {
  describe('start test: subject', () => {
    it('test addSubsciption', async () => {
      await request
        .post('/subject/addSubsciption')
        .send({
          user_id: 4,
          experiment_id: 1
        })
        .expect(200)
    })
    it('test getMySubsciption', async () => {
      await request
        .get('/subject/getMySubsciption?user_id=1')
        .expect(200)
    })
  })
}

export default subjectTest
