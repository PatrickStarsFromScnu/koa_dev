import sequelize from './instance'
import Sequelize from 'sequelize'

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
  time: Sequelize.DATE
}, {
  timestamps: false
})

export default experiments
