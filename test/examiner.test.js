import {request} from './register'

function examinerTest () {
  describe('start test: examiner', () => {
    it.only('test addExperiment', async () => {
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
    it('test getMyExperiment', async () => {
      await request
        .get('/examiner/getMyExperiment?user_id=1')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IvCfjbxob2x5WmhlbmdzIiwib3BlbklkIjoib2VkWUYwUmQ2MWdleG1tY2J6Uy13VzF1NlpNVSIsImlhdCI6MTUyODU1OTMwNiwiZXhwIjoxNTI4NjQ1NzA2fQ.pgVX19zwFrmfMzQKPObzCkaIELhVB3PI31pvA6vZ5Mw' })
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
