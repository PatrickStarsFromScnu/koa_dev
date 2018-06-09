import jsonwebtoken from 'jsonwebtoken'
import config from '../../config/index'

const signToken = payload => {
  const token = jsonwebtoken.sign(
    payload,
    config.auth.jwtSecret,
    {
      expiresIn: '24h'
    }
  )
  return token
}

const checkToken = ctx => {
  const token = ctx.header.authorization.split(' ')[1]
  try {
    jsonwebtoken.verify(token, config.auth.jwtSecret, {
      expiresIn: '24h'
    })
  } catch (err) {
    throw new Error('token验证错误：' + err)
  }
}

export {
  signToken,
  checkToken
}
