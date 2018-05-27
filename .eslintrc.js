module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "standard",
  "rules": {
    "handle-callback-err": ["off", "err"]
  }
};