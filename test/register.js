import supertest from 'supertest'
import chai from 'chai'
import app from '../server/app'

const expect = chai.expect
const request = supertest(app.listen())

export {
  expect,
  request
}
