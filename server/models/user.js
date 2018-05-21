import sequelize from './instance'
import Sequelize from 'sequelize'

// 定义一个 user module
let User = sequelize.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_name: Sequelize.STRING(60),
  user_picture: Sequelize.STRING(500)
}, {
  timestamps: false
})

export default User
