import sequelize from './instance'
import Experiments from './experiments'
import Users from './users'

// 定义一个subscription model
const subscription = sequelize.define('subscription', {
}, {
  timestamps: false
})

Experiments.belongsToMany(Users, { through: subscription, foreignKey: 'experiment_id' })
Users.belongsToMany(Experiments, { through: subscription, foreignKey: 'user_id' })

export default subscription
