import users from '../models/users'
import request from '../utils/request'
import config from '../../config/index'
import { signToken } from '../utils/forToken'

// 小程序信息
let option = {
  appId: config.miniProgromOption.appId,
  appSecret: config.miniProgromOption.appSecret
}

/* 若为首次登录，在用户表中添加该拥有并返回token
** 若不是首次登录，返回token
*/
const login = async ctx => {
  ctx.verifyParams({
    code: {
      type: 'string',
      require: true
    },
    userName: {
      type: 'string',
      require: true
    },
    picture: {
      type: 'string',
      require: true
    }
  })
  let res
  let token
  let user
  const body = ctx.request.body
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${option.appId}&secret=${option.appSecret}&js_code=${body.code}&grant_type=authorization_code`
  try {
    // 获取 { openid, secret_key }
    res = await request(url)
    if (!res.openid) return
    user = await users.find({
      where: {
        open_id: res.openid
      }
    })
    // 如果不存在该用户，向users表添加该用户
    if (!user) {
      await users.create({
        name: body.userName,
        picture: body.picture,
        open_id: res.openid
      })
    }
    // 生成token
    token = signToken({userName: body.userName, openId: res.openid})
    return token
  } catch (err) {
    console.log(err)
  }
}

export default {
  login
}
