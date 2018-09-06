const https = require('https')

const request = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = ''
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        resolve(JSON.parse(data))
      })
    }).on('error', err => {
      reject(err)
    })
  })
}

export default request
