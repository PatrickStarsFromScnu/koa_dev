import {request} from './register'

function subjectTest () {
  describe('start test: subject', () => {
    it('test addSubscription', async () => {
      await request
        .post('/subject/addSubscription')
        .send({
          user_id: 4,
          experiment_id: 2
        })
        .expect(200)
    })
    it.only('test getMySubscription', async () => {
      await request
        .get('/subject/getMySubscription?user_id=3')
        .expect(200)
    })
  })
}

export default subjectTest
