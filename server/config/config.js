const {passwordConnect}=require('./tokens')

module.exports= {
  "development": {
    "username": "root",
    "password": passwordConnect,
    "database": "xpensedb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": passwordConnect,
    "database": "xpensedb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": passwordConnect,
    "database": "xpensedb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
