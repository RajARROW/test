module.exports = (app) => {
  app.use('/user', require('./userControler'))
}