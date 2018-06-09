// import users from '../models/users'
import request from '../utils/request'
let option = {
  appId: 'wx888f0a9296eb78ab',
  appSecret: '6abcd438f8dbbeb4a6f1ed259c077380'
}
const login = async ctx => {
  ctx.verifyParams({
    code: {
      type: 'string',
      require: true
    }
  })
  const body = ctx.request.body
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${option.appId}&secret=${option.appSecret}&js_code=${body.code}&grant_type=authorization_code`
  let res = await request(url)
  console.log(res)
}

export default {
  login
}
