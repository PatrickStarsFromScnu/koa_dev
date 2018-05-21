import User from './../models/user'

let addUser = async () => {
  let res = await User.findAll({
    where: {
      user_name: 'Amy'
    }
  })
  return res
}

export default {
  addUser
}
