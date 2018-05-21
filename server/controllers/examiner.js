import userServices from '../services/user'

let publish = async (ctx) => {
  ctx.body = await userServices.addUser()
  console.log(ctx.body)
}

export default {
  publish
}
