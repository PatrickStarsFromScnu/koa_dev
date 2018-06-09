import sequelize from './instance'
import Sequelize from 'sequelize'

// 定义一个users model
const users = sequelize.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  picture: Sequelize.STRING,
  open_id: Sequelize.STRING
}, {
  timestamps: false
})

export default users
