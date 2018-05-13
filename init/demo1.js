// 一次会话操作
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1', // 数据库地址
  user: 'root', // 数据库用户
  password: '123456',
  database: 'my_database' // 选中的数据库
})

// 执行sql脚本对数据库进行读写
connection.query('SELECT * FROM my_table', (error, results, fields) => {
  if (error) throw error
  // connected!

  // 结束会话
  connection.release()
  // 一个事件就有一个从开始到结束的过程，数据库会话操作执行完后，
  // 就需要关闭掉，以免占用连接资源。
  // 在数据池中进行会话操作
})
