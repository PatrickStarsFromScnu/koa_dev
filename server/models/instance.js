import Sequelize from 'sequelize'
import config from '../../config/index'

let sequelize = new Sequelize(config.sql.database, config.sql.user, config.sql.password, {
  host: config.sql.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

export default sequelize
