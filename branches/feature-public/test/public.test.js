import {request} from './register'

function publicTest () {
  describe('start test: public', () => {
    it('test getAllExperiments', async () => {
      await request
        .get('/public/getAllExperiments')
        .expect(200)
    })
    it('test getExperiment', async () => {
      await request
        .get('/public/getExperiment?experiment_id=2')
        .expect(200)
    })
    it.only('test getExperimentsByType', async () => {
      let url = encodeURI('/public/getExperimentsByType?type=皮肤电')
      await request
        .get(url)
        .expect(200)
    })
  })
}

export default publicTest
