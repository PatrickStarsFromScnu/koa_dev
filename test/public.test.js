import {request} from './register'

function publicTest () {
  describe('start test: public', () => {
    it('test getAllExperiments', async () => {
      await request
        .get('/api/public/experiments?limit=5&offset=0')
        .set({ Authorization: 'Bearer U3BlY2lhbFBhc3NDb2Rl' })
        .expect(200)
    })
    it('test getExperiment', async () => {
      await request
        .get('/api/public/experiments/13')
        .set({ Authorization: 'Bearer U3BlY2lhbFBhc3NDb2Rl' })
        .expect(200)
    })
    it.only('test getExperimentsByType', async () => {
      let url = encodeURI('/api/public/experiment_types/行为实验?limit=5&offset=0')
      await request
        .get(url)
        .set({ Authorization: 'Bearer U3BlY2lhbFBhc3NDb2Rl' })
        .expect(200)
    })
  })
}

export default publicTest
