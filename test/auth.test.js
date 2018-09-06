import {request} from './register'

function authTest () {
  describe('start test: auth', () => {
    it.only('test login', async () => {
      await request
        .post('/auth/login')
        .send({
          code: '023QjR7f1hHels0jpV4f1UDQ7f1QjR7D',
          userName: '🍼holyZhengs',
          picture: 'https://wx.qlogo.cn/mmopen/vi_32/l83EXfs9NjE8mg6VBoqrqVTNPaiaiaicmic4J3q4axTiaJXkNiastCA2XEiaa7WB4orHQ5fPIdHWawsiay3KvFTYnFTnibQ/132'
        })
        .expect(200)
    })
  })
}

export default authTest
