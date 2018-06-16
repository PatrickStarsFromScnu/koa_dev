import sequelize from './instance'
import Sequelize from 'sequelize'
import Users from './users'

// 定义一个expriments model
const experiments = sequelize.define('experiments', {
  experiment_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  publisher_id: Sequelize.INTEGER,
  publisher_name: Sequelize.STRING,
  title: Sequelize.STRING,
  type: Sequelize.STRING,
  duration: Sequelize.STRING,
  pay: Sequelize.CHAR,
  position: Sequelize.STRING,
  request: Sequelize.STRING,
  period: Sequelize.STRING,
  others: Sequelize.STRING,
  time: Sequelize.DATE,
  application: Sequelize.STRING
}, {
  timestamps: false
})

experiments.belongsTo(Users, {foreignKey: 'publisher_id'})

export default experiments
