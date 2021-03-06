import {request} from './register'

function examinerTest () {
  describe('start test: examiner', () => {
    it('test addExperiment', async () => {
      await request
        .post('/examiner/addExperiment')
        .send({
          publisher_id: 4,
          publisher_name: 'holy',
          title: 'one experiment',
          type: '皮肤电',
          duration: '115',
          pay: '20',
          position: 'sadasdasdada',
          request: 'jkljljl',
          period: '15:00-16:00',
          others: 'sadasdad',
          time: new Date()
        })
        .expect(200)
    })
    it.only('test getMyExperiment', async () => {
      await request
        .get('/examiner/getMyExperiment?user_id=1')
        .set({ Authorization: 'Bearer' })
        .expect(200)
    })
    it('test deleteMyExperiment', async () => {
      await request
        .post('/examiner/deleteMyExperiment')
        .send({
          experiment_id: 9
        })
    })
  })
}

export default examinerTest
