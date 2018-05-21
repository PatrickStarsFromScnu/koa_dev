import {request} from './register'

function examinerTest () {
  describe('start test: examiner', () => {
    it('test', () => {
      request
        .get('/examiner/publish')
        .expect(200)
    })
  })
}

export default examinerTest
