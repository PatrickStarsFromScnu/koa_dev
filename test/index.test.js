// 一个测试例子+
const supertest = require('supertest')
const chai = require('chai')
const app = require('../server/app')

const expect = chai.expect
const request = supertest(app.listen())

describe('start testing your get request', () => {
  it('test /getString.json', done => {
    request
      .get('/getString.json')
      .expect(200)
      .end((err, res) => {
        // 断言判断结果是否为object类型
        expect(res.body).to.be.an('object')
        expect(res.body.success).to.be.an('boolean')
        expect(res.body.data).to.be.an('string')
        done()
      })
  })
})
