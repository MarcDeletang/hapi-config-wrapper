const config = require('config')

exports.register = function(server, options, next){
  server.app.config = config
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
